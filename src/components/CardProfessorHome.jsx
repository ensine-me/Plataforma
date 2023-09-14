import React from 'react'
import Rating from '@mui/material/Rating';
import styles from '../style/cardProfessorHome.module.css'
import DisciplinaDoProfessor from '../components/DisciplinaDoProfessor';

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
                style={{ backgroundImage: urlFoto !== undefined ? `url(${urlFoto})` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCorUM2rzb77_a8FOOOBD-7UW6BdQR2Mhw40LOuc&s" }}
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