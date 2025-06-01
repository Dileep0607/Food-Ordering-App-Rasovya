const { render,screen } = require("@testing-library/react");
import RestaurantCard from '../RestaurantCard.js';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
import { withOpenLabel } from '../RestaurantCard.js';

test("Should render the restaurant card using props",()=>{
    //rendering
    render(<RestaurantCard resData={MOCK_DATA} />)
    //Querying
    const name = screen.getByText("Burger King")
    //Assertion
    expect(name).toBeInTheDocument();
})

// Wrap RestaurantCard with the HOC
const RestaurantCardWithLabel = withOpenLabel(RestaurantCard);

test("Should render the restaurant card with is opened flag",()=>{
    //rendering
    render(<RestaurantCardWithLabel resData={MOCK_DATA} />)
    //Querying
    const label = screen.getByText("Opened")
    //Assertion
    expect(label).toBeInTheDocument();
})