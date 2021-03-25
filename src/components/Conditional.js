import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartbeat, faKissWinkHeart} from '@fortawesome/free-solid-svg-icons'



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
                {this.props.children.length? this.props.children: <h1>Not available <FontAwesomeIcon icon={faHeartbeat}/> We hope to serve you better next time <FontAwesomeIcon icon={faKissWinkHeart}/></h1>}
            </div>
        )
    }
}
export default Conditional;