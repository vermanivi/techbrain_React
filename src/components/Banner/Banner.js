import React, { Component } from 'react';

//Lifecycle
class Banner extends Component
{
    componentDidMount()
    {
        console.log(">>>>>>>>>Banner mount")
        
    }
    componentDidUpdate()
    {
        console.log(">>>>>>>>>>>Banner Update")
    }
    componentDidUnmount()
    {
        console.log(">>>>>>>>Banner Unmount")
    }
    state = {

    }
    render()
    {
        return (
            <p>Banner</p>
        );
    }
}