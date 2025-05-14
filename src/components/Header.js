import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{

    const [button,setButton] = useState('Login');
    console.log("Header component Rendered first")
    //useEffect Concept:

    //If no dependency array => useEffect is called on every render.
    //If dependency array is empty = [] => useEffect is called only on initial render(only once).
    //If dependency array is [button] => useEffect is called everytime the button is updated. 
    useEffect(()=>{
        console.log("useEffect Called after the header component rendered.")
    },[]);

    return(
        <div className='header'>
            <div className='logo conatiner'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='heading'>
                <h1>--RASOVYA-Delivery Hub--</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Conatct Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        button === "Login" ? setButton("Logout") : setButton("Login")
                        console.log(button)
                    }}>{button}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;