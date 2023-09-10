import React from 'react'
import Rating from '@mui/material/Rating';
import styles from '../styles/CardProfessorHome.module.css'
import DisciplinaDoProfessor from './DisciplinaDoProfessor';

const CardProfessorHome = ({
    urlFoto,
    nome,
    avaliacao,
    preco,
    disciplinas
}) => {
    return (
        <div className={styles.card_professor}>
            <div
                className={styles.card_professor_foto_container}
                style={{ backgroundImage: `url(${urlFoto})` }}
            >

            </div>
            <div className={styles.card_professor_nome_container}>
                <h2>{nome}</h2>
            </div>
            <div className={styles.card_professor_avaliacao_container}>
                <Rating
                    name="avaliacao-professor"
                    defaultValue={avaliacao}
                    precision={0.5}
                    readOnly
                />
            </div>
            <div className={styles.card_professor_preco_container}>
                <p>R$ {preco}</p>
            </div>
            <div className={styles.card_professor_disciplinas_container}>
                {disciplinas.map((disciplina, index) => {
                    return (
                        <DisciplinaDoProfessor key={index} disciplina={disciplina} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardProfessorHome