import React from 'react'
import styles from '../assets/styles/escolherMaterias.module.css'
import BotaoDisciplina from '../components/BotaoDisciplina';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '@supabase/auth-helpers-react';
import { login } from '../functions/login';
import { isVariableInSessionStorage } from 'functions/isVariableInSessionStorage';
import Add from "../components/images/chat/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const EscolherMaterias = () => {
  const session = useSession();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isCheckedMatematica, setIsCheckedMatematica] = useState(false);
  const [isCheckedPortugues, setIsCheckedPortugues] = useState(false);
  const [isCheckedIngles, setIsCheckedIngles] = useState(false);
  const [isCheckedFisica, setIsCheckedFisica] = useState(false);
  const [isCheckedQuimica, setIsCheckedQuimica] = useState(false);
  const [isCheckedBiologia, setIsCheckedBiologia] = useState(false);
  const [isCheckedHistoria, setIsCheckedHistoria] = useState(false);
  const [isCheckedGeografia, setIsCheckedGeografia] = useState(false);
  const [isCheckedFilosofia, setIsCheckedFilosofia] = useState(false);
  const [isCheckedSociologia, setIsCheckedSociologia] = useState(false);
  const [isCheckedArtes, setIsCheckedArtes] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const papel = urlParams.get('papel');

  // função que cadastra o usuário no banco
  async function handleSubmit() {
    const checkedDisciplinas = [];
    if (isCheckedMatematica) checkedDisciplinas.push('Matematica');
    if (isCheckedPortugues) checkedDisciplinas.push('Lingua Portuguesa');
    if (isCheckedIngles) checkedDisciplinas.push('Lingua Inglesa');
    if (isCheckedFisica) checkedDisciplinas.push('Fisica');
    if (isCheckedQuimica) checkedDisciplinas.push('Quimica');
    if (isCheckedBiologia) checkedDisciplinas.push('Biologia');
    if (isCheckedHistoria) checkedDisciplinas.push('Historia');
    if (isCheckedGeografia) checkedDisciplinas.push('Geografia');
    if (isCheckedFilosofia) checkedDisciplinas.push('Filosofia');
    if (isCheckedSociologia) checkedDisciplinas.push('Sociologia');
    if (isCheckedArtes) checkedDisciplinas.push('Artes');

    if (checkedDisciplinas.length === 0) {
      alert("Por favor, escolha ao menos uma disciplina");
      return;
    }

    const materiasFormatoJSON = checkedDisciplinas.map((disciplina) => {
      return {
        "nome": disciplina
      }
    })

    const objUsuario = papel === "aluno" ? {
      "nome": session.user.user_metadata.full_name,
      "email": session.user.email,
      "senha": session.user.email,
      "foto": session.user.user_metadata.avatar_url,
      "materias": materiasFormatoJSON,
      "files": session.user.files
    }
      :
      {
        "nome": session.user.user_metadata.full_name,
        "email": session.user.email,
        "senha": session.user.email,
        "foto": session.user.user_metadata.avatar_url,
        "materias": materiasFormatoJSON,
        "files": session.user.files,
        "descricao": JSON.parse(sessionStorage.getItem('dadosCadastroProfessor')).descricao,
        "precoHoraAula": JSON.parse(sessionStorage.getItem('dadosCadastroProfessor')).precoHoraAula
      }

    const url = papel && papel === "aluno" ? "http://44.217.177.131:8080/usuarios/cadastrar" : "http://44.217.177.131:8080/usuarios/professor/cadastrar";


    try {
      const displayName = objUsuario.nome;
      const email = objUsuario.email;
      const password = objUsuario.email;
      const files = objUsuario.files;

      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, files).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    };


    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objUsuario)
    }).then((response) => {

      if (response.ok) {
        //logando
        login(session.user.email, session.user.email).then((response2) => {

          if (isVariableInSessionStorage("usuario")) {
            const idUsuario = JSON.parse(sessionStorage.getItem("usuario")).userId;
            if (papel === "professor") {
              console.log('Authorization: Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token);
              console.log("dados do professor: " + JSON.stringify(JSON.parse(sessionStorage.getItem('dadosCadastroProfessor'))));
              JSON.parse(sessionStorage.getItem('dadosCadastroProfessor')).formacoes.forEach(formacao => {
                console.log("formacao: ", JSON.stringify(formacao));
                fetch(`http://44.217.177.131:8080/usuarios/professor/${idUsuario}/formacao`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                  },
                  body: JSON.stringify({
                    dtInicio: formacao.dtInicio,
                    dtTermino: formacao.dtTermino,
                    instituicao: formacao.instituicao,
                    nomeCurso: formacao.nomeCurso,
                    tipoFormacao: formacao.tipoFormacao
                  })
                }).then((response) => {
                  console.log("response: ", JSON.stringify(response));
                })
              });
              JSON.parse(sessionStorage.getItem('dadosCadastroProfessor')).disponibilidades.forEach(disponibilidade => {
                console.log("disponibilidade: ", JSON.stringify(disponibilidade));
                fetch(`http://44.217.177.131:8080/usuarios/professor/${idUsuario}/disponibilidade`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                  },
                  body: JSON.stringify(disponibilidade)
                })
              });
            }
            navigate("/inicial-aluno");
          } else {
            console.log("usuario nao ta no session storage");
          }
        });
        //indo pra home
      }
    });

    console.log("url: ", url);
    console.log("objUsuario: ", JSON.stringify(objUsuario));


  }

  return (
    <div className={styles.escolher_materias_full_page_div}>
      <div className={styles.escolher_materias_container}>
        <div className={styles.escolher_materias_header}>
          <div className={styles.escolher_materias_header_titulo}>
            <h2>Seja bem vindo à Ensine-me!</h2>
            {
              papel && papel === "aluno" ?
                (<h3>Selecione as disciplinas em que você possui dificuldades</h3>) :
                (<h3>Selecione as disciplinas em que você vai dar aulas</h3>)
            }
          </div>
          <div className={styles.escolher_materias_header_icons}>
            <Link to="/" className='custom_link'><ArrowBackIcon style={{ fontSize: 60, cursor: 'pointer' }} /></Link>
          </div>
        </div>
        <div className={styles.escolher_materias_botoes_container}>
          <BotaoDisciplina disciplina="Matemática" isChecked={isCheckedMatematica} setIsChecked={setIsCheckedMatematica} />
          <BotaoDisciplina disciplina="Língua Portuguesa" isChecked={isCheckedPortugues} setIsChecked={setIsCheckedPortugues} />
          <BotaoDisciplina disciplina="Inglês" isChecked={isCheckedIngles} setIsChecked={setIsCheckedIngles} />
          <BotaoDisciplina disciplina="Física" isChecked={isCheckedFisica} setIsChecked={setIsCheckedFisica} />
          <BotaoDisciplina disciplina="Química" isChecked={isCheckedQuimica} setIsChecked={setIsCheckedQuimica} />
          <BotaoDisciplina disciplina="Biologia" isChecked={isCheckedBiologia} setIsChecked={setIsCheckedBiologia} />
          <BotaoDisciplina disciplina="História" isChecked={isCheckedHistoria} setIsChecked={setIsCheckedHistoria} />
          <BotaoDisciplina disciplina="Geografia" isChecked={isCheckedGeografia} setIsChecked={setIsCheckedGeografia} />
          <BotaoDisciplina disciplina="Filosofia" isChecked={isCheckedFilosofia} setIsChecked={setIsCheckedFilosofia} />
          <BotaoDisciplina disciplina="Sociologia" isChecked={isCheckedSociologia} setIsChecked={setIsCheckedSociologia} />
          <BotaoDisciplina disciplina="Artes" isChecked={isCheckedArtes} setIsChecked={setIsCheckedArtes} />
        </div>
        <div className={styles.escolher_materias_cadastrar_button_container}>
          <button className={styles.escolher_materias_cadastrar_button} onClick={handleSubmit}>Continuar</button>
        </div>
      </div>
    </div>
  )
}

export default EscolherMaterias