import React, { useState } from 'react'
import "./LoginPage.css";
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../Context/StateProvider';
// import { auth } from './firebase';

function LoginPage() {

    const [{ basket }, dispatch] = useStateValue();

    //USE STATE FOR THE GRAPING THE INPUT VALUE.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //USE HISTORY HOOK FOR BACK TO THE COMPONENT.
    const history = useHistory();

    //ONCHANGE FUNCTION.
    const onChange_Email = (eve) => {
        const EmailVal = eve.target.value;
        // console.log(EmailVal);
        setEmail(EmailVal);
    }

    const onChange_Password = (eve) => {
        const PasswordVal = eve.target.value;
        // console.log(PasswordVal);
        setPassword(PasswordVal);
    }

    //LOGINN FUNCTION.
    function loginFun(event) {
        event.preventDefault();
        dispatch({
            type: "SET_USER",
            payload: email,
        })
        setPassword("");
        setEmail("");

        setTimeout(() => {
            alert(`Hello, ${email} 😊 You Login Successfully. Wellcome To Amazon.`);
        }, 1000);
    }

    //NEW REGISTER FUNCTION.
    const registerFun = (event) => {
        event.preventDefault();//THIS IS STOP THE REFRESHING.
        //LOGIN LOGIIG IS HEAR...
    }
    return (
        <div className='login'>

            <Link to="/">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>


            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={onChange_Email} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={onChange_Password} />
                    <button onClick={loginFun} className='login_sign_in_btn'>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={registerFun} className='login_registerbtn'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage