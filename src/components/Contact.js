import React from 'react';

class Contact extends React.Component{
    render(){
        
        return(
        <li className="contact">
        <img className="contact-image" src={this.props.image} width="130px" height="100px" alt=""/> 
            <div className = "contact-info">
        <div className="contact-name" >{this.props.name}</div>    
        <div className="contact-number" >{this.props.phoneNumber}</div>     
            </div>
        </li>
        )
    }
}
 







export default Contact;