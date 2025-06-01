import { sum } from "../sum";

//synatx to write the test cases:

test("Test to calculate the sum of two numbers",()=>{
    const result = sum(3,4);
    //Assertion --> what we are expecting as result.
    expect(result).toBe(7);
});