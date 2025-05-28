import UserClass from '../components/UserClass';
import UserFunc from '../components/UserFunc';
import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor')
    }
    componentDidMount(){
        console.log('Parent Componrnt Did Mount')
    }
    render(){
        console.log('Parent render')
         return (
        <div className='p-4 m-4'>
            <h1>About</h1>
            <h2>Local Delivery Hub</h2>
            <div>
                <UserClass name='First' location='Chennai' email='support@rasovya.com' />
            </div>
            <div className='my-6'>
                <UserClass name='Second' location='Chennai' email='support@rasovya.com' />
            </div>
            <UserContext.Consumer>
                {({IsLoggedIn}) => (<h1 className='font-bold'>UserName : {IsLoggedIn}</h1>)}
            </UserContext.Consumer>
            {/**How this UserClass passing props will work behind the scenes:
             * This line will be converted into--->
             * new UserClass({ name: "Dileep Kanth",location='Chennai',email='support@rasovya.com'})
             * This object { name: "Dileep Kanth",location='Chennai',email='support@rasovya.com'} becomes the props.
             * So when the UserClass constructor runs, and you call super(props), 
             * you’re telling the parent class (React.Component) to initialize with those props.
                React.Component then assigns this.props = props internally.
              */}
        </div> )
    }
}

export default About;