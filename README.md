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

# Types of Testing(Developer):
-Unit Testing:
    -->Unit Testing means testing individual units of code (such as functions, methods, or          components) in isolation, to ensure they work as expected.
    -->Unit Testing is the process of testing each component or function individually in isolation (not as part of the whole app), to verify that it behaves as expected under various inputs or states.

-Integration Testing:
    -->Integration testing is the process of testing how multiple components or units work together as a group, rather than in isolation.
    Suppose you have:
        A Form component with an input field and a submit button.
        A Parent component that passes props and handles form data.
        🔹 In unit testing, you'd test the Form component alone.
        🔹 In integration testing, you'd test:
        How the form interacts with the parent
        Whether the input updates the state
        Whether the submit button triggers a handler correctly

-End-toEnd Tetsing(e2e testing):
    -->End-to-End testing is the process of testing the entire application flow — from start to finish — just like a real user would use it.
    -->It simulates real user scenarios to verify that all layers of the app (frontend, backend, database) work together correctly.
    🧠 Example:
    Suppose you have a food ordering app. An E2E test would check:
        A user visits the homepage
        Searches for "Pizza"
        Adds it to cart
        Proceeds to checkout
        Completes the order
    ✔️ This tests the complete user journey — not just one component or page.

# Libraries We Use for Testing:
    1->> React Testing Library:
        -->We use it to write test cases in our applications.It is the more standard way.
        -->It builds on top of DOM Testing Library(It is like base for all).
        -->It uses something known as JEST
        --------
        | JEST  |
        ---------
            -->It is javascript testing framework

# Setting up testing in our app:
    -->To install react testing library use [npm i -D @testing-library/react]
    -->To install JEST use [ npm i -D jest]
    -->To install Babel dependencies use [npm install --save-dev babel-jest @babel/core @babel/preset-env]
    -->Nest create a bable.congig.js file to add babel configuration.
    -->Next create .parcelrc file to disable default babel traspilation.
    -->Next JEST Configuration(npx JEST --init)
    -->Next install JS-DOM (npm install -D jest-environment-jsdom)
    -->Install npm i -D @babel/preset-react - To work JSX inside test cases.
    -->Include @babel/preset-react inside bable config
    -->Install  npm i -D @testing-library/jest-dom(To get access to functions like                  toBeInTheDocument())
