import React, { Component } from "react";


import styles from'./contactForm.module.css'
import CustomButton from "./custom-button/custom-button";

class ContactForm extends Component {
  constructor() {
    super();

    this.state={
        firstName:"",
        email:"",
        msg: "",
    }
  }
  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  handleSubmit =event =>{
      event.preventDefault()
      alert("We appreciate your feedback")
      this.setState({
        firstName:"",
        email:"",
        msg: "",
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.input}>
    
          <input type="text"
          className={styles.name_input}
           name="firstName"
           value={this.state.firstName}
           onChange={this.handleChange}
           placeholder="Name"
           required
            />
             <input type="email"
             className={styles.email_input}
           name="email"
           value={this.state.email}
           onChange={this.handleChange}
           placeholder="email"
           required
            />
            <input type="textarea" 
            className={styles.textarea}
           name="msg"
           value={this.state.msg}
           onChange={this.handleChange}
           placeholder="message.."
           required
            />
            <CustomButton>Submit</CustomButton>
        </div>
      </form>
    );
  }
}
export default ContactForm;
