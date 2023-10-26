import React from 'react'
import styles from '../assets/styles/DisciplinaDoProfessor.module.css'

const DisciplinaDoProfessor = ({ disciplina }) => {
  return (
    <div className={styles.disciplina_do_professor}>{disciplina}</div>
  )
}

export default DisciplinaDoProfessor