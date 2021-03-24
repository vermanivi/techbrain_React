import React, { Component } from 'react';
import Banner from '..components/Banner/Banner';
class Home extends Component
{
    state = {
        flag: true,
        name: 'Nivish'
    }
    
    updateName = () =>
    {
        this.setState({
            name:'Rahul'
        })
    }
    
    render()
    {
        const { flag, name } = this.state;
        console.log(">render");
        console.log(">>>", flag, name);
        return (
            //thing in curly braces will keep changing
            <div>
                My name is {name}
                <button onclick={this.updateName}>Change Name</button>
                
                
                
                
                <Banner />
                </div>
        )
       
    }
}
export default Home;