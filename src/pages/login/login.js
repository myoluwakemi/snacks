import React, {useState} from "react";
import "./login.scss"
import FormInput from "../../components/FormInput";
import {Link} from 'react-router-dom'
import CustomButton from "../../components/custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase.utils";


const Login = () => {
    const initialState = {
        email: "",
        password: "",
        rememberMe: false
    }
    const [data, setData] = useState(initialState)

    const handleInputChange = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })

    }
    console.log(data)
    return (
        <div className='loginBody'>
            <div className='cardd'>
                <h1>Log in</h1>
                <form>
                    <div className="data">
                        <CustomButton onClick={signInWithGoogle}>{' '}Sign with Google{' '}</CustomButton>

                        <FormInput name='email' type='email' value={data.email} handleChange={handleInputChange}
                                   label="Email"/>

                        <FormInput name="password" type="password" value={data.password}
                                   handleChange={handleInputChange} label="Password"/>
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
                        <CustomButton type="submit">LOGIN</CustomButton>
                    </div>


                </form>
                <div className="redirect">
                    <a href="/register" className="newacc">
                        I don't have an Accout?<b> Signup</b>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Login