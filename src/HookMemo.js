import { useState,useMemo, useEffect } from "react";

function slowFunction(num) {
    console.log("show function")
    for (let i = 0; i <= 100000000; i++)
    {
        
    }
    return num * 2;
}
const HookMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number])

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        
        }
    },[dark])
   

    useEffect(() => {
        
    },[themeStyle])
    return (<div>
        <input type="Number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </div>)
}

export default HookMemo;