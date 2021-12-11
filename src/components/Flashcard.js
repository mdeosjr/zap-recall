import {useState} from 'react';

import botaoVirar from "../assets/turn.png";
import "./Flashcard.css";

export default function Flashcard({pergunta, resposta, setCarta, carta, tamanhoDeck, resultado, setResultado}) {
    const [opcao, setOpcao] = useState('');
    const [classe, setClasse] = useState('opcoes');
    const [selecionado, setSelecionado] = useState('')

    function escolhaDeOpcao(opcao) {
        setOpcao(opcao);
        setClasse('');
        if (opcao === 'incorreto') {
            setResultado(resultado+1);
        }
    }

    function respostaCarta() {
        setSelecionado('selecionado');
    }

    function proximaCarta() {
        setCarta(() => carta+1);
        setClasse('opcoes');
        setOpcao('');
        setSelecionado('')
    }

    return (
        <>
            <div className={`flashcard ${opcao}`}>
                <div className={`parteFrente ${selecionado}`}>
                    <span className="contador">{carta+1}/{tamanhoDeck}</span>
                    <span className="pergunta">{pergunta}</span>
                    <img className="virarCarta" onClick={respostaCarta} src={botaoVirar} alt=""></img>
                </div>
                <div className={`parteCostas ${selecionado}`}>
                    <header>
                        <span className="titulo">{pergunta}</span>
                        <span className="contador">{carta+1}/{tamanhoDeck}</span>
                    </header>
                    <span className="resposta">{resposta}</span>
                    {(classe === 'opcoes') ? 
                        <div className="opcoes">
                            <div className="neutro" onClick={() => escolhaDeOpcao('neutro')}>Aprendi agora</div>
                            <div className="incorreto" onClick={() => escolhaDeOpcao('incorreto')}>Não lembrei</div>
                            <div className="corretoEsforco" onClick={() => escolhaDeOpcao('corretoEsforco')}>Lembrei com esforço</div>
                            <div className="correto" onClick={() => escolhaDeOpcao('correto')}>Zap!</div>
                        </div> 
                        : 
                        <img className="virarCarta" onClick={proximaCarta} src={botaoVirar} alt=""></img>
                    }
                </div>
            </div>
        </>
    )
}