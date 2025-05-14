
import RestaurantCard from '../components/RestaurantCard';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import resList from '../utils/mockData';
import { Link } from 'react-router-dom';

const Body = () =>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestros,setFilteredRestros] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

   
    const fetchData =(resolve,reject)=>{
        const data = fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
    
        data
        .then((res)=>{
            return res.json();
            //console.log(res);
        })
        .then((resdata)=>{
            console.log(resdata.data);

            setAllRestaurants(resdata.data?.cards[4]?.card?.card?.
                gridElements?.infoWithStyle?.
                restaurants || []);
            setFilteredRestros(resdata.data?.cards[4]?.card?.card?.
                gridElements?.infoWithStyle?.
                restaurants || []);
        })
        .catch((err)=>{
            console.error("Failed to fetch API...",err);
        })
    }


    //Conditional Rendering inside terinary operator
    return Array.isArray(allRestaurants) && allRestaurants.length === 0 ?(<Shimmer />):(
        <div className='body'>
            <div className='filter'>
                <input 
                type='text' 
                placeholder='Search for Coffee...' 
                className='search-box' 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}  
                />
                <button onClick={()=>{
                    const searchfilter = allRestaurants.filter(
                        (search)=>search.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestros(searchfilter);
                    //console.log(searchfilter);
                }}>Search</button>
                <button className='filter-btn'
                onClick={()=>{
                    setFilteredRestros(allRestaurants.filter((restro)=>
                        restro.info.avgRating > 4.5
                    ));
                }}
               >
                    Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {Array.isArray(filteredRestros) && filteredRestros.length>0?(
//not using keys(not acceptable)<<<<index as keys(not recommended)<<<<<<<<<<Unique id as keys(best practice)
                    filteredRestros.map((restaurant)=>(
                    <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
                        <RestaurantCard  resData={restaurant} />
                    </Link>
                )))
                :(<Shimmer/>)
                }
            </div>
        </div>
    )
}

export default Body;