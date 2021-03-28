import React, {useState} from "react";
import "./login.css"
import FormInput from "../../components/FormInput";
import {Link} from 'react-router-dom'



const Login = () => {
    const initialState = {
        email:  "",
        password: "",
        rememberMe: false
    }
    const [data, setData ] = useState(initialState)

    const handleInputChange = (event) => {
        setData({
            ...data,[event.target.name] : event.target.value
        })

    }
    console.log(data)
    return (
        <div className='loginBody'>
           <div className='cardd'>
               <h1>Log in</h1>
               <form>
                   <div className="data">

            <FormInput name='email' type='email' value={data.email} handleChange={handleInputChange} label="Email"/>

            <FormInput name="password" type="password" value={data.password} handleChange={handleInputChange} label="Password"/>
                       <div className="rememberP">
                           <div className="roundCheckbox">
                               <input
                                   type="checkbox"
                                   name="rememberMe"
                                   className="rememberCheckbox"
                                   onChange={handleInputChange}
                               />

                               <label>Remember</label>
                           </div>
                           <div>
                               <Link to="" className="ForgotPassword">
                                   Forgot Password?
                               </Link>
                           </div>
                       </div>
                   </div>


               </form>
           </div>

        </div>
    )
}
export default Login