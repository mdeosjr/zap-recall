import logotipo from '../../assets/logo.png'
import proximo from '../../assets/next.png'
import "./style.css"

export default function TelaInicio({setPagina}) {
    return (
        <div className="telaInicio">
            <div className="logotipo">
                <img src={logotipo} alt=""></img>
            </div>
            <div className="botaoIniciar" data-identifier="start-zap-recall" onClick={() => setPagina('flashcards')}>
                <span>Praticar React</span>
                <img src={proximo} alt=""></img>
            </div>
        </div>
    )
}