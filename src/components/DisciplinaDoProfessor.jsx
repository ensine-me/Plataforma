import React from 'react';
import styles from '../assets/styles/DisciplinaDoProfessor.module.css';

const disciplinaCores = {
  Matematica: '#f19a3e',
  'Lingua Portuguesa': '#ff99c9',
  Inglês: '#fdfd96',
  Fisica: '#fdba9b',
  Química: '#f4c2c2',
  Biologia: '#c3a6cb',
  Historia: '#d5bda5',
  Geografia: '#9bc4e2',
  Filosofia: '#8fbb99',
  Sociologia: '#98d7c2',
  Artes: '#f88379',
};

const DisciplinaDoProfessor = ({ disciplina }) => {
  const corDeFundo = disciplinaCores[disciplina];

  const style = {
    backgroundColor: corDeFundo,
  };

  return (
    <div className={styles.disciplina_do_professor} style={style}>
      {disciplina}
    </div>
  );
};

export default DisciplinaDoProfessor;
