import './style.css';

export default function Opcoes({setOpcao, setClasse, setResultado, resultado}) {
    function escolhaDeOpcao(opcao) {
        setOpcao(opcao);
        setClasse('');
        if (opcao === 'incorreto') {
            setResultado(resultado+1);
        }
    }
    
    return (
        <div className="opcoes">
            <div className="neutro" onClick={() => escolhaDeOpcao('neutro')}>Aprendi agora</div>
            <div className="incorreto" onClick={() => escolhaDeOpcao('incorreto')}>Não lembrei</div>
            <div className="corretoEsforco" onClick={() => escolhaDeOpcao('corretoEsforco')}>Lembrei com esforço</div>
            <div className="correto" onClick={() => escolhaDeOpcao('correto')}>Zap!</div>
        </div> 
    )
}