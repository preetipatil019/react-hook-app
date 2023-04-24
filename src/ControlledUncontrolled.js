import { useState,useRef } from "react"

export const Controlled = () => {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
         setInput(e.target.value)
    }
    return (<form>
        <label>Controlled using useState
            <input type="text" value={input} onChange={handleChange} />
        </label>
        <p>Input Value:{input}</p>
        
    </form>)
}

export const UnControlled = () => {
    const inputRef = useRef(null)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputRef.current.value)
    }
    return (<form onSubmit={handleSubmit}>
        <label>UnControlled using internal state by Dom 
        <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
    </form>)
    
}