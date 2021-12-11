import {useState} from 'react';

import logomini from '../assets/logo-mini.png';
import Flashcard from "./Flashcard.js";
import TelaFinalizar from './TelaFinalizar';
import "./Flashcards.css";

export default function Flashcards() {
    const [carta, setCarta] = useState(0);
    const [resultado, setResultado] = useState(0)
    
    const deck = [
        { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
        { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    const tamanhoDeck = deck.length;

    const deckJSX = deck.map(card => <Flashcard resultado={resultado} setResultado={setResultado} carta={carta} setCarta={setCarta} tamanhoDeck={tamanhoDeck} {...card}/>)

    return (
        <>
            <img className="flashcardsLogo" src={logomini} alt="Logo ZapRecall"></img>
            <div className="flashcards">
                {(carta === tamanhoDeck) ? <TelaFinalizar resultado={resultado}/> : deckJSX[carta]}
            </div>
        </>
    )
}