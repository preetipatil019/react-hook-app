import { useEffect, useState } from "react";


const MapAndFilter = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json))
        console.log(users)
       
    },[])
    return (<div>Map AND Filter
        
        {users.map((user) => (
            <p>{user.name}</p>
        ))}
    </div>)
}

export default MapAndFilter;