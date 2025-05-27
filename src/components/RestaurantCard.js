import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const{resData} = props;
    //Optional Chaining
    const{cloudinaryImageId,name,cuisines,avgRating,locality} = resData?.info;
    const{slaString} = resData?.info?.sla;
    return(
        <div className='res-card p-2 m-4 w-[250px] h-auto bg-gray-50 rounded-lg 
        hover:shadow-2xl hover:scale-[0.95] transform-gpu transition duration-300 ease-in'>
            <img className='res-img p-1 w-[250px] h-[150px] rounded-xl' src={CDN_URL
                +cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 id="txt" className="text-[15px] font-medium">⭐{avgRating} .{slaString}</h4>
            <h4 className="text-gray-500">{cuisines.join(", ")}...</h4>
            <h4 className="text-gray-500">{locality}</h4>
        </div>
    )
}

export const withOpenLabel = (RestaurantCard) =>{
    return (props) =>{
        return(
            <div className="relative w-[250px] m-4">
                <label className="absolute top-2 left-2 bg-green-200 px-2 py-1 text-sm font-semibold rounded shadow z-20">Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;