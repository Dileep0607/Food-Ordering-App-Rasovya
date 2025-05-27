import React from 'react';


class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count: 1
        }

        console.log(`${this.props.name}Child Constructor`)
    }

    componentDidMount(){
        console.log(`${this.props.name}Child Component Did Mount`)
    }
    
    render(){
        const {name,location,email} = this.props;
        const {count} = this.state;
        console.log(`${name}Child render`);
        return(
            <div className='user'>
                <h1>User_ID: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: {email}</h4>
            </div>
        )
    }
}

export default UserClass;

{/**Execution order of multiple childs:
    -Parent Constructor
    -Parent render
        -First child constructor
        -First child render

        -Second child constructor
        -Second child render

            <DOM UPDATED - IN SINGLE BATCH>

        -First child Component Did Mount
        -Second child Component Did Mount

    -Parent Component Did Mount
    */}