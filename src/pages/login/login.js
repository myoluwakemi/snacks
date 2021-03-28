import React from "react";
import "./login.css"


const Login = () => {
    return (
        <div className='loginBody'>
            <div className="rememberP">
                <div className="roundCheckbox">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        className="rememberCheckbox"
                    />

                    <label>Remember</label>
                </div>
            </div>


        </div>
    )
}
export default Login