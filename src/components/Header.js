import { useContext, useEffect, useState } from "react";
import { LOGO_URL, DELIVERY_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    {/* React Context: using useContext hook we can fetch the data from UserContext object 
        which is created using React.createContext() */} 
    const { IsLoggedIn } = useContext(UserContext);

    const [button, setButton] = useState('Login');
    console.log("Header component Rendered first");

    // useEffect Concept:
    // If no dependency array => useEffect is called on every render.
    // If dependency array is empty = [] => useEffect is called only on initial render(only once).
    // If dependency array is [button] => useEffect is called every time the button is updated.
    useEffect(() => {
        console.log("useEffect Called after the header component rendered.");
    }, []);

    const onlinestatus = useOnlineStatus();

    // subscribing to cartslice using selector(hook)
    const cartItems = useSelector((store) => store.cart.items);
    console.log('Cart Items:', cartItems);

    return (
        <div className='flex justify-between bg-gray-100 shadow-lg m-2 items-center'>
            {/* Logo Section */}
            <div className='flex items-center'>
                <img className='w-auto h-20 mr-2' src={DELIVERY_LOGO} alt="Delivery Logo" />
                <h1 className="text-xl font-bold ml-2">--FOOD-Delivery--</h1>
            </div>

            {/* Navigation Section */}
            <ul className="flex items-center p-4">
                <li className="px-4">
                    Online Status: {onlinestatus ? "🟢" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 text-2xl">
                    <Link to="/cart">🛒-{cartItems?.length}</Link>
                </li>
                <li className="px-4">
                    <button
                        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                        onClick={() => {
                            setButton(button === "Login" ? "Logout" : "Login");
                            console.log(button);
                        }}
                    >
                        {button}
                    </button>
                </li>
                <li className="font-bold px-4">
                    {IsLoggedIn}
                </li>
            </ul>
        </div>
    );
};

export default Header;
