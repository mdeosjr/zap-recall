import {useState} from 'react';

import botaoVirar from "../assets/turn.png";
import "./Flashcard.css";

export default function Flashcard({pergunta, resposta, setCarta, carta, tamanhoDeck}) {
    const [opcao, setOpcao] = useState('');
    const [classe, setClasse] = useState('opcoes');
    const [resultado, setResultado] = useState(0)

    function escolhaDeOpcao(opcao) {
        setOpcao(opcao);
        setClasse('');
        if (opcao === 'incorreto') {
            setResultado(resultado+1);
        }
    }

    function proximaCarta() {
        setCarta(carta+1);
        setClasse('opcoes');
        // if (carta === tamanhoDeck) {
        //     renderizarFinal(resultado);
        // }
    }

    return (
        <div className={`flashcard ${opcao}`}>
            <div className="parteFrente">
                <span className="contador">{carta+1}/{tamanhoDeck}</span>
                <span className="pergunta">{pergunta}</span>
                <img className="virarCarta" src={botaoVirar} alt=""></img>
            </div>
            <div className="parteCostas">
                <span className="titulo">{pergunta}</span>
                <span className="contador">{carta+1}/{tamanhoDeck}</span>
                <span className="resposta">{resposta}</span>
                {(classe === 'opcoes') ? 
                    <div className="opcoes">
                        <button className="" onClick={() => escolhaDeOpcao('neutro')}>Aprendi agora</button>
                        <button className="" onClick={() => escolhaDeOpcao('incorreto')}>Não lembrei</button>
                        <button className="" onClick={() => escolhaDeOpcao('corretoEsforco')}>Lembrei com esforço</button>
                        <button className="" onClick={() => escolhaDeOpcao('correto')}>Zap!</button>
                    </div> 
                    : 
                    <img className="virarCarta" onClick={proximaCarta} src={botaoVirar} alt=""></img>
                }
            </div>
        </div>
    )
}