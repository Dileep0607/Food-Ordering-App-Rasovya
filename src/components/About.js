import UserClass from '../components/UserClass';
import UserFunc from '../components/UserFunc';
import React from 'react';

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
        <div>
            <h1>About</h1>
            <h2>Local Delivery Hub</h2>
            <UserClass name='First' location='Chennai' email='support@rasovya.com' />
            <UserClass name='Second' location='Chennai' email='support@rasovya.com' />
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