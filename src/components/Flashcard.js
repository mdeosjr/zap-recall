import botaoVirar from "../assets/turn.png";
import "./Flashcard.css";

export default function Flashcard() {
    return (
        <div className="flashcard">
            <div className="parteFrente">
                <span className="contador">1/8</span>
                <span className="pergunta">O que é JSX?</span>
                <img className="virarCarta" src={botaoVirar} alt=""></img>
            </div>
            <div className="parteCostas">
                COSTAS
            </div>
        </div>
    )
}