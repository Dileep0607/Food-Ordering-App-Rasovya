import { useEffect, useState } from "react"

const useOnlineStatus = () =>{

    const [onlinestatus,setOnlineStatus] = useState(true); 

    useEffect(()=>{
        window.addEventListener("Online",()=>{
                setOnlineStatus(true);
        })

        window.addEventListener("Offline",()=>{
                setOnlineStatus("false");
        })
    },[])

    return onlinestatus;
}

export default useOnlineStatus;