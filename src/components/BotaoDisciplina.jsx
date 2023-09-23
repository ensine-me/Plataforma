import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/botaoDisciplina.module.css';

const BotaoDisciplina = ({ disciplina, isChecked, setIsChecked }) => {
  const [containerClass, setContainerClass] = useState(styles.btn_disciplina_container);

  useEffect(() => {
    setContainerClass(isChecked ? styles.btn_disciplina_container + ' ' + styles.checked : styles.btn_disciplina_container);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={containerClass}>
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