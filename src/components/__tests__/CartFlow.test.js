import { render,act,screen, fireEvent } from "@testing-library/react"
import MOCK_DATA from '../mocks/resMenuMock.json';
import RestaurantMenu from '../RestaurantMenu';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA),
    })
)

test("Sould render restaurant Menu component",async ()=>{
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
        </Provider>
        </BrowserRouter>
));

    const accordionItem = screen.getByText("Ipl Combos (4)");

    fireEvent.click(accordionItem);

    //const itemCount = screen.getAllByTestId("foodItem").length;

    expect(screen.getAllByTestId("foodItem").length).toBe(4);

    const addBtns = screen.getAllByRole("button",{name : "ADD"});
    console.log(addBtns.length);

    fireEvent.click(addBtns[0]);

    expect(screen.getByText(/🛒-1/)).toBeInTheDocument();

})