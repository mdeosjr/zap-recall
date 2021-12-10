import logomini from '../assets/logo-mini.png';
import Flashcard from "./Flashcard.js";
import "./Flashcards.css";

export default function Flashcards() {
    return (
        <>
            <img className="flashcardsLogo" src={logomini} alt=""></img>
            <div className="flashcards">
                <Flashcard/>
            </div>
        </>
    )
}