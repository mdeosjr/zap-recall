import {useState} from 'react';
import TelaInicio from "./components/TelaInicio.js";
import Flashcards from "./components/Flashcards.js";

export default function App() {
    const [pagina, setPagina] = useState('telaInicio')

    return (
        <>
            {/* {(pagina === 'telaInicio') ? <TelaInicio setPagina={setPagina}/> : <Flashcards/>} */}
            <Flashcards/>
        </>
    )
}
