import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../components/RestaurantCategory";


const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo == null){return <Shimmer />}

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    return(
        <div className="Menu w-7/12 mx-auto py-10">
            <h1 className="font-bold text-[30px] ">{name}</h1>
            <div className="menu-items">
                <div className="flex justify-between  m-4 mx-auto p-4 bg-orange-100 rounded-lg text-black">
                    <p>{cuisines.join(', ')}</p>
                    <p>{costForTwoMessage}</p>
                </div>
                <div>
                    {categories.map((item) => 
                    <RestaurantCategory key={item?.card?.card?.categoryId} data={item?.card?.card} />)}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;