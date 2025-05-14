import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const[resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[resId]);

   
    const fetchMenu = () =>{

        const Menu = fetch(MENU_API+resId);
        //const Menu = fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=${resId}`)

        Menu
        .then((data)=>{return data.json()})
        .then((res)=>{
            setResInfo(res.data);
            console.log(res.data);
            
        console.log("res.data", res?.data);
        console.log("res.data.cards", res?.data?.cards);
        })
        .catch((err) => {console.error(err)})

    };

    if(resInfo == null){return <Shimmer />}

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="Menu">
            <h1>{name}</h1>
            <div className="menu-items">
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}-RS.{item?.card?.info?.price/100}/-
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;