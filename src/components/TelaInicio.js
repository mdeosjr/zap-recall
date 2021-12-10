import logotipo from '../assets/logo.png'
import next from '../assets/next.png'
import "./TelaInicio.css"

export default function TelaInicio() {
    return (
        <div className="telaInicio">
            <div className="logotipo">
                <img src={logotipo} alt=""></img>
            </div>
            <div className="botaoIniciar">
                <span>Praticar React</span>
                <img src={next} alt=""></img>
            </div>
        </div>
    )
}