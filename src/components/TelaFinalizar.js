import emojiFeliz from '../assets/party.png';
import emojiTriste from '../assets/sad.png';
import "./TelaFinalizar.css";

export default function TelaFinalizar({resultado}) {
    return (
        <>
         {(resultado === 0) ? 
            <div className="sucesso">
                <div className="tituloSucesso">
                    <p>PARABÉNS!</p><img src={emojiFeliz} alt="emoji feliz"></img>
                </div>
                <p className="textoSucesso">Você não esqueceu de nenhum flashcard!</p>
            </div> 
            : 
            <div className="fracasso">
                <div className="tituloFracasso">
                    <p>Putz..</p><img src={emojiTriste} alt="emoji triste"></img>
                </div>
                <p className="textoFracasso">Você esqueceu de alguns flashcards..</p>
                <p className="textoFracasso">Não desanime! Na próxima você consegue!</p>
            </div>
        }
        </>
    )
}