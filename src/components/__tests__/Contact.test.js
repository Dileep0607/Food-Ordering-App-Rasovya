import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


//When we a lot of test cases suppose we have 20 then we will group them into 5 as contact,5 as About etc., and to group them we use describe
describe("Contact Us Page Test Cases",()=>{
    //We should test whether the component is loaded on the DOM or not
// !important--> Whenever we are testing a UI component inside React you have to render it onto jsDom 1st
test("Should load the Contact Us component ",()=>{
    //Rendering component into JS-DOM
    render(<Contact />)

    //To get access to rendered component on JS-DOM we use screen
    const heading  = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})
//We can also write 'it' instead of 'test
test("Should load the button inside Contact Us Component",()=>{
    render(<Contact />)

    const button  = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

it("Should load the input field inside Contact Us Component",()=>{
    render(<Contact />)
    //If we write like this then it is known as Querying
    const inputtext  = screen.getByPlaceholderText("Name...");

    expect(inputtext).toBeInTheDocument();
})

test("Should load all the input boxes(count of it) inside Contact Us Component",()=>{
    render(<Contact />)
    //Whenever there are multiple items then we will use getAllBy
    const inputBoxes  = screen.getAllByRole("textbox")

    console.log(inputBoxes.length)

    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
})

})

