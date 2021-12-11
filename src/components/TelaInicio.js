import logotipo from '../assets/logo.png'
import next from '../assets/next.png'
import "./TelaInicio.css"

export default function TelaInicio({setPagina}) {
    return (
        <div className="telaInicio">
            <div className="logotipo">
                <img src={logotipo} alt=""></img>
            </div>
            <div className="botaoIniciar" onClick={() => setPagina('flashcards')}>
                <span>Praticar React</span>
                <img src={next} alt=""></img>
            </div>
        </div>
    )
}