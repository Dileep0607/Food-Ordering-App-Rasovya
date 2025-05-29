import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


//import Grocery from './components/Grocery';

//Chunking
//on demand loading

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
    //React Context --> It creates data in a global space where every component can access data.
    const [userName,setUserName] = useState();

    useEffect(() => {
        //Assume API calling of logged in users
        const data = {
            name : "Dileep Kanth"
        }
        setUserName(data.name);
    },[])

    return(
        <div className='app'>
            {/**To pass data to all the components whichever access it */}
            <Provider store={appStore}>
            <UserContext.Provider value={{IsLoggedIn : userName , setUserName}}>
                <Header />
                <Outlet />
            </UserContext.Provider>
            </Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/grocery',
                element :<Suspense fallback={<h1>Loading...</h1>}> <Grocery/> </Suspense>
            },
            {
                path : '/restaurant/:resId',
                element : <RestaurantMenu />
            }
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
