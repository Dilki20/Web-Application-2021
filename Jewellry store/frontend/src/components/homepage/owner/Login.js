import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import User from './user/user.svg'


function Login() {
    const [owner, setOwner] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setOwner({...owner, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/owner/login', {...owner})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
      
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <div className="img1">
                <img src={User} alt="" width="30" />
                </div>
                <div className="log">
                <h2>Login</h2></div>
                <input type="email" name="email" required
                placeholder="Email" value={owner.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={owner.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <p>Don't have an account? </p>
                    <Link to="/register">SignUp</Link>
                </div>
            </form>
        </div>
      
    )
}

export default Login