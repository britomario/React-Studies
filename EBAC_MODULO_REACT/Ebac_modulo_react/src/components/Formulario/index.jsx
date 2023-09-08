import { useState } from "react";

function Formulario () {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('')

    function changeName({ target }) {
        setNome(target.value)
    }

    function renderResult() {
        const sum = materiaA + materiaB + materiaC;
        const media = sum / 3;

        console.log(media)

        if(media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <>
        <form>
            <input type="text" placeholder="Seu nome" onChange={changeName} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC(parseInt(target.value))}/>
            {renderResult()}
        </form>
        </>
    )
}

export default Formulario;