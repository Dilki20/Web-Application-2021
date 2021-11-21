import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [owner, setOwner] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setOwner({...owner, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/owner/register', {...owner})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Create Your Account</h2>  
                <input type="text" name="name" required
                placeholder="Name" value={owner.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={owner.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={owner.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">SignUP</button>
                   <p> Have an account?</p>
                    <Link to="/login">Log in now</Link>
                </div>
            </form>
        </div>
    )
}

export default Register