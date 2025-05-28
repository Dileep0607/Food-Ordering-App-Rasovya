import { useContext, useEffect, useState } from "react";
import { LOGO_URL,DELIVERY_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{

    {/*React Context: using useContext hook we can fetch the data from UserContext object 
        which is created using React.createContext() */} 

    const {IsLoggedIn} = useContext(UserContext);
    console.log(UserContext);

    const [button,setButton] = useState('Login');
    console.log("Header component Rendered first")
    //useEffect Concept:

    //If no dependency array => useEffect is called on every render.
    //If dependency array is empty = [] => useEffect is called only on initial render(only once).
    //If dependency array is [button] => useEffect is called everytime the button is updated. 
    useEffect(()=>{
        console.log("useEffect Called after the header component rendered.")
    },[]);

    const onlinestatus = useOnlineStatus();

    return(
        <div className='flex justify-between bg-gray-100 shadow-lg m-2'>
            <div className='logo conatiner'>
                <img className='w-auto h-20' src={DELIVERY_LOGO}/>
            </div>
            <div className='p-4 m-4'>
                <h1>--RASOVYA-Delivery Hub--</h1>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-5">
                        Online Status: {onlinestatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-5">
                        <Link to="/about">About Us</Link> 
                    </li>
                    <li className="px-5">
                        <Link to="/contact">Conatct Us</Link>
                    </li>
                    <li className="px-5">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-5">Cart</li>
                    <button className="pr-4" onClick={()=>{
                        button === "Login" ? setButton("Logout") : setButton("Login")
                        console.log(button)
                    }}>{button}</button>
                    <li className="font-bold">{IsLoggedIn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;