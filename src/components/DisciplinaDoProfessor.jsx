import React from 'react';
import styles from '../assets/styles/DisciplinaDoProfessor.module.css';

import FunctionsIcon from '@mui/icons-material/Functions';
import CreateIcon from '@mui/icons-material/Create';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
import ScienceIcon from '@mui/icons-material/Science';
import SpaIcon from '@mui/icons-material/Spa';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Groups3Icon from '@mui/icons-material/Groups3';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const disciplinaCores = {
  Matematica: '#f19a3e',
  'Lingua Portuguesa': '#ff99c9',
  'Lingua Inglesa': '#fdfd96',
  Fisica: '#fdba9b',
  Quimica: '#f4c2c2',
  Biologia: '#c3a6cb',
  Historia: '#d5bda5',
  Geografia: '#9bc4e2',
  Filosofia: '#8fbb99',
  Sociologia: '#98d7c2',
  Artes: '#f88379',
};

const renderIcon = (disciplina) => {
  switch (disciplina) {
    case 'Matematica':
      return <FunctionsIcon />;
    case 'Lingua Portuguesa':
      return <CreateIcon />;
    case 'Lingua Inglesa':
      return <LanguageIcon />;
    case 'Fisica':
      return <BoltIcon />;
    case 'Quimica':
      return <ScienceIcon />;
    case 'Biologia':
      return <SpaIcon />;
    case 'Historia':
      return <AccountBalanceIcon />;
    case 'Geografia':
      return <PublicIcon />;
    case 'Filosofia':
      return <PsychologyIcon />;
    case 'Sociologia':
      return <Groups3Icon />;
    case 'Artes':
      return <ColorLensIcon />;
    default:
      return null;
  }
};

const DisciplinaDoProfessor = ({ disciplina }) => {
  const corDeFundo = disciplinaCores[disciplina];

  const style = {
    backgroundColor: corDeFundo,
  };

  return (
    <div className={styles.disciplina_do_professor} style={style}>
      {renderIcon(disciplina)}
      {disciplina}
    </div>
  );
};

export default DisciplinaDoProfessor;
