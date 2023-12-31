import React from 'react'
import styles from '../assets/styles/CardAula.module.css'
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from "react-router-dom";
const CardAula = ({
  id,
  disciplina,
  alunosCadastrados,
  maxAlunos,
  assunto,
  data,
  nomeProfessor,
  urlFotoProfessor
}) => {
  return (
    <Link to={'/aula?id=' + id}>
      <div className={styles.container_card_aula}>
        <div className={styles.card_aula_disciplina_qtd}>
          <p className={styles.card_aula_disciplina}>{disciplina}</p>
          <div className={styles.card_aula_qtd}>
            <GroupsIcon style={{ fontSize: 35 }} />
            <p>{alunosCadastrados}/{maxAlunos}</p>
          </div>
        </div>
        <div className={styles.card_aula_assunto}>
          <p>{assunto}</p>
        </div>
        <div className={styles.card_aula_data_professor}>
          <div className={styles.card_aula_data}>
            <p>{data}</p>
          </div>
          <div className={styles.card_aula_professor}>
            <div
              className={styles.card_aula_img_professor}
              style={{ backgroundImage: `url(${urlFotoProfessor})` }}
            ></div>
            <p>{nomeProfessor}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardAula