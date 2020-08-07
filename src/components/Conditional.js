import React, { Component } from 'react';


class Conditional extends Component{
    constructor(props){
        super(props)
        
        this.state= {
            content: true,
        }
    
    }
    render(){
        return(
            <div>
                {this.props.children.props.children.length? this.props.children: <h1>Not available</h1>}
            </div>
        )
    }
}
export default Conditional;