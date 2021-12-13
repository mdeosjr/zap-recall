import {useState} from 'react';
import TelaInicio from "./components/TelaInicio";
import Flashcards from "./components/Flashcards";

export default function App() {
    const [pagina, setPagina] = useState('telaInicio')

    return (
        <>
            {(pagina === 'telaInicio') ? <TelaInicio setPagina={setPagina}/> : <Flashcards/>}
        </>
    )
}