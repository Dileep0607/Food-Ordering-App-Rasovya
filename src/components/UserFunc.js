import { useState } from "react";

const UserFunc = () =>{
    const [count] = useState(0);
    return(
        <div className="user">
            <h1>User_ID:{count}</h1>
            <h2>Name: Dileep Kanth</h2>
            <h3>Location: Chennai</h3>
            <h4>Email: dfl060700@gmail.com</h4>
        </div>
    )
}

export default UserFunc;