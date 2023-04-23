import { useEffect, useState,useRef } from "react";

const HookUseRef = () => {
    const [name, setName] = useState('')

    const prevName = useRef('')
    useEffect(() => {
        prevName.current = name;
     },[name])
    return (<>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <div>My Name is {name} and previous name is {prevName.current}</div>
    
    </>)
}



export default HookUseRef;