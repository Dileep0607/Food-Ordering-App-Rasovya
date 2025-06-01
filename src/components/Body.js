import useOnlineStatus from '../utils/useOnlineStatus';
import RestaurantCard, { withOpenLabel } from '../components/RestaurantCard';
import { useState,useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useAllRestaurants from '../utils/useAllRestaurants'
import UserContext from '../utils/UserContext';

const Body = () =>{
    const {allRestaurants,filteredRestros,setFilteredRestros} = useAllRestaurants();

    const [searchText,setSearchText] = useState("")

    const RestaurantCardOpened = withOpenLabel(RestaurantCard);

    const onlinestatus = useOnlineStatus();

    const {IsLoggedIn,setUserName} = useContext(UserContext);

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
            {/*Search Items */}
            <div className='filter flex p-2 m-4'>
                <input 
                type='text' 
                placeholder='Search your favourites...' 
                className='search-box border border-solid border-black rounded-xl py-1 px-2' 
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
                {/*Filtered Restaurants */}
                <div className='flex items-center pl-56'>
                <button className='filter-btn px-4 bg-blue-200 rounded-xl p-1'
                onClick={()=>{
                    setFilteredRestros(allRestaurants.filter((restro)=>
                        restro.info.avgRating > 4.5
                    ));
                }}
               >
                    Top Rated Restaurants</button>
                </div>
                {/*UserName for useContext */}
                <div className='flex items-center pl-56'>
                    <label className='font-bold'>UserName : </label>
                    <input 
                    className='border border-black p-1 m-1 rounded-lg' 
                    type='text' 
                    placeholder='Enter UserName...'
                    value={IsLoggedIn}
                    onChange={(e) => setUserName(e.target.value)}
                     />
                </div>
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