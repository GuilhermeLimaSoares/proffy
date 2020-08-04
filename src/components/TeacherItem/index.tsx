import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/44446985?s=400&u=b87972ae1cb8ffd94022e171bb637b9eb22801f6&v=4" alt="" />
                <div>
                    <strong>Guilherme Lima Soares</strong>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnoloias de quimica avançada.
                <br /><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;