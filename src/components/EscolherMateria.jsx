import React from 'react'
import styles from '../style/escolherMaterias.module.css'
import HomeIcon from '@mui/icons-material/Home';
import BotaoDisciplina from '../components/BotaoDisciplina';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EscolherMaterias = () => {
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

  const handleSubmit = () => {
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
    console.log(checkedDisciplinas);
  }

  return (
    <div className={styles.escolher_materias_full_page_div}>
      <div className={styles.escolher_materias_container}>
        <div className={styles.escolher_materias_header}>
          <div className={styles.escolher_materias_header_titulo}>
            <h2>Seja bem vindo à Ensine-me!</h2>
            <h3>Selecione as disciplinas em que você possui dificuldades</h3>
          </div>
          <div className={styles.escolher_materias_header_icons}>
            <Link to="/" className='custom_link'><HomeIcon style={{ fontSize: 60, cursor: 'pointer' }} /></Link>
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