import useOnlineStatus from '../utils/useOnlineStatus';
import RestaurantCard, { withOpenLabel } from '../components/RestaurantCard';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useAllRestaurants from '../utils/useAllRestaurants'

const Body = () =>{
    const {allRestaurants,filteredRestros,setFilteredRestros} = useAllRestaurants();

    const [searchText,setSearchText] = useState("")

    const RestaurantCardOpened = withOpenLabel(RestaurantCard);

    const onlinestatus = useOnlineStatus();

    if(onlinestatus === false)
    {
        return (
        <div>
            <h1>Looks like you have dropped 🛜! Please Check your Internet...</h1>
        </div>
        );
    }
    //Conditional Rendering inside terinary operator
    return Array.isArray(allRestaurants) && allRestaurants.length === 0 ?(<Shimmer />):(
        <div className='body'>
            <div className='filter flex p-2 m-4'>
                <input 
                type='text' 
                placeholder='Search for Coffee...' 
                className='search-box border border-solid border-black rounded-xl' 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}  
                />
                <button className='px-4 bg-blue-200 rounded-xl'
                onClick={()=>{
                    const searchfilter = allRestaurants.filter(
                        (search)=>search.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestros(searchfilter);
                    //console.log(searchfilter);
                }}>Search</button>
                <div className='flex items-center pl-56'>
                <button className='filter-btn px-4 bg-blue-200 rounded-xl'
                onClick={()=>{
                    setFilteredRestros(allRestaurants.filter((restro)=>
                        restro.info.avgRating > 4.5
                    ));
                }}
               >
                    Top Rated Restaurants</button> </div>
            </div>
            <div className='res-container flex flex-wrap justify-between'>
                {Array.isArray(filteredRestros) && filteredRestros.length>0?(
//not using keys(not acceptable)<<<<index as keys(not recommended)<<<<<<<<<<Unique id as keys(best practice)
                    filteredRestros.map((restaurant)=>(
                    <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
                        {restaurant?.info?.isOpen ? 
                        (<RestaurantCardOpened resData={restaurant} />)
                        :(<RestaurantCard  resData={restaurant} />)
                        }
                    </Link>
                )))
                :(<Shimmer/>)
                }
            </div>
        </div>
    )
}

export default Body;