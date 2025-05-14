import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const{resData} = props;
    //Optional Chaining
    const{cloudinaryImageId,name,cuisines,avgRating,locality} = resData?.info;
    const{slaString} = resData?.info?.sla;
    return(
        <div className='res-card'>
            <img className='res-img' src={CDN_URL
                +cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4 id="txt">⭐{avgRating} .{slaString}</h4>
            <h4>{cuisines.join(", ")}...</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default RestaurantCard;