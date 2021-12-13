import {useState} from 'react';
import Opcoes from '../Opções';
import botaoVirar from "../../assets/turn.png";
import "./style.css";

export default function Flashcard({pergunta, resposta, setCarta, carta, tamanhoDeck, resultado, setResultado}) {
    const [opcao, setOpcao] = useState('');
    const [classe, setClasse] = useState('opcoes');
    const [selecionado, setSelecionado] = useState('')

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
            <div className={`flashcard ${opcao}`} data-identifier="flashcard">
                <div className={`parteFrente ${selecionado}`}>
                    <span className="contador" data-identifier="counter">{carta+1}/{tamanhoDeck}</span>
                    <span className="pergunta">{pergunta}</span>
                    <img className="virarCarta" data-identifier="arrow" onClick={respostaCarta} src={botaoVirar} alt=""></img>
                </div>
                <div className={`parteCostas ${selecionado}`}>
                    <span className="titulo">{pergunta}</span>
                    <span className="contador" data-identifier="counter">{carta+1}/{tamanhoDeck}</span>
                    <span className="resposta">{resposta}</span>
                    {(classe === 'opcoes') ? 
                        <Opcoes setOpcao={setOpcao} setClasse={setClasse} setResultado={setResultado} resultado={resultado}/>
                        : 
                        <img className="virarCarta" data-identifier="arrow" onClick={proximaCarta} src={botaoVirar} alt=""></img>
                    }
                </div>
            </div>
        </>
    )
}