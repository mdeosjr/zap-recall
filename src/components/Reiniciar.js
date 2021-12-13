import './Reiniciar.css';
import proximo from '../assets/next.png'

export default function Reiniciar() {
    function reiniciar() {
        window.location.reload();
    }
    
    return (
        <div className="botaoReiniciar" onClick={reiniciar}>
            <span>Tentar novamente</span>
            <img src={proximo} alt="Botão próximo"></img> 
        </div>
    )
}