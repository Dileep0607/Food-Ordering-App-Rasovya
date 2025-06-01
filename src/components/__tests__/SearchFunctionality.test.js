import { render,act } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/resListMockData.json'
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Should render the Body component with Search functionality",async () =>{
    await act (async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
));
}) 