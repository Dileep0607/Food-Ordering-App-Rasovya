import { fireEvent, render,screen} from "@testing-library/react";
import Header from '../Header.js'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';



// !Unit Testing:
//There are 3 pieces of the test case
//1.Rendering  Component on to the screen
//2.Then find something on screen or query something on screen
//3.Assert or get something
test("Should render Header component with login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore} > 
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const LoginButton = screen.getByRole('button');

    expect(LoginButton).toBeInTheDocument();

})

test("Should render Header component with login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore} > 
            <Header />
        </Provider>
    </BrowserRouter>
    );
    //Instead of giving getByText we can pass this way also
    const LoginButton = screen.getByRole('button',{name: 'Login'});

    expect(LoginButton).toBeInTheDocument();
    
})

test("Should render Header component with Cart",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore} > 
            <Header />
        </Provider>
    </BrowserRouter>
    );
    //using regex to find anything with this 🛒 actually in our header component it will be like this 🛒-0
    const Cart = screen.getByText(/🛒/);

    expect(Cart).toBeInTheDocument();
    
})

test("Should change login to logout on button click",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore} > 
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const LoginButton = screen.getByRole('button',{name:'Login'});
    //To click the button on JS-DOM we use fireEvent
    fireEvent.click(LoginButton);

    const LogOutButton = screen.getByRole('button',{name:'Logout'});
    expect(LogOutButton).toBeInTheDocument();
})