
const fetchData = async ()=>{
        const initialData = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json1 = await initialData.json();  
        console.log(json1);
        setAllRestuarants(json1.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.
            restaurants || []);
        setFilteredRestros(json1.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.
            restaurants || []);
    }


    ///API Fetch for updated restros in swiggy:

    const fetchApi = async () => {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "userLocation": {
                "lat": 17.6868159,  // Use actual lat and lng for your location
                "lng": 83.2184815,
                "address": "Visakhapatnam, Andhra Pradesh, India",
                "area": "",
                "showUserDefaultAddressHint": false
              }
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          const newRestaurants = data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
          if (newRestaurants.length === 0) {
            console.log('No more restaurants found!');
          } else {
            setAllRestaurants(newRestaurants);
            setFilteredRestros(newRestaurants);  // Update filtered list with all restaurants
          }
      
        } catch (err) {
          console.error("Error fetching restaurants:", err.message); // Improved error handling
        }
      };