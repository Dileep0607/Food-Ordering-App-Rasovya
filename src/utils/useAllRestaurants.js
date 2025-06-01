import { useEffect, useState } from "react"

const useAllRestaurants = () =>{

    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestros,setFilteredRestros] = useState([]);

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const resdata = await data.json();

        console.log("Restaurant Data:",resdata.data);
        const restro = resdata.data?.cards[4]?.card?.card?.
                gridElements?.infoWithStyle?.
                restaurants || [] ;
        setAllRestaurants(restro);
        setFilteredRestros(restro);

    }

    return {allRestaurants,filteredRestros,setFilteredRestros};
}

export default useAllRestaurants;