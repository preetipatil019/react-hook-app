import { useState,useEffect } from "react";

const HookUseEffect = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    console.log("render")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize",handleResize)
        }
    })
    
    return (
        <>
            <div>Use Effect</div>
            <h2>get data from Json</h2>
            <button onClick={()=>setResourceType("posts")}>Posts</button>
            <button onClick={()=>setResourceType("Users")}>Users</button>
            <button onClick={() => setResourceType("Comments")}>Comments</button>
            <br />
            <h1>{resourceType}</h1>
            {/* {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })} */}

            <br />
            <h2>window resize</h2>
            <div>{windowWidth}</div>
            </>
    )
}

export default HookUseEffect;