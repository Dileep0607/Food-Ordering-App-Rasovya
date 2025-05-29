Rasovya

1.Header:
    -Logo
    -Nav Items(Home,About,Cart)
2.Body:
    -Search
    -Restaurant Container(Restro Cards of multiple restaurants)
    -Restro cards(Images,Restaurant Name,cuisine,Rating,Delivery Estimation)
3.Footer:
    -CopyRights
    -Links(SocialMedia)
    -Address
    -Contact

used in RestuarantCard component to optimize the code
//Optinoal Chaining:In js it is a feature that allows you to safely access properities of an object without having to manually check if each intermediate property exists.If any of the chain is null or undefinied, it simply returns undefinied instead of throwing error

 --cache-dir .cache

 
    "build": "rm -rf dist/* && parcel build src/index.html"


# Redux Toolkit:
-install @reduxjs/toolkit and react-redux library (npm install @reduxjs/toolkit)
-Build our store
-Connect our store to our app
-Create Slice(cart slice)
-When click on ADD button dispatch(action) --> Call reducer fun() --> this modifies the cart slice
                                    |-->Add Item to Cart, Remove Item from Cart, Clear Cart etc...
-Read data from cart slice --> Selector