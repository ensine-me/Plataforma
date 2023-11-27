import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/botaoDisciplina.module.css';

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

const BotaoDisciplina = ({ disciplina, isChecked, setIsChecked }) => {
  const [containerClass, setContainerClass] = useState(styles.btn_disciplina_container);
  const renderIcon = (disciplina) => {
    switch (disciplina) {
      case 'Matemática':
        return <FunctionsIcon />;
      case 'Língua Portuguesa':
        return <CreateIcon />;
      case 'Inglês':
        return <LanguageIcon />;
      case 'Física':
        return <BoltIcon />;
      case 'Química':
        return <ScienceIcon />;
      case 'Biologia':
        return <SpaIcon />;
      case 'História':
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
  }

  useEffect(() => {
    setContainerClass(isChecked ? styles.btn_disciplina_container + ' ' + styles.checked : styles.btn_disciplina_container);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={containerClass}>
      {renderIcon(disciplina)}
      {disciplina}
      <input
        type="checkbox"
        id={`btn_disciplina_${disciplina}`}
        className={styles.btn_disciplina_checkbox}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
};

export default BotaoDisciplina;