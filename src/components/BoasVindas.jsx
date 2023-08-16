import { useState } from "react";

function BoasVindas()
{
    const [ nome, setNome ] = useState('');
    return(
        <>
        <div>
        <input type="text" onChange={ (e) => { setNome( e.target.value ) } } />
        </div>
        <div>
            <sapan> {nome} </sapan>
        </div>
        </>
    )
}
export default BoasVindas;