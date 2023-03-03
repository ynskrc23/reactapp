import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function LoginUser(){
        let item = {password,email}
        let result = await fetch("http://127.0.0.1:8000/api/login-user",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result",result);
        navigate("/account");
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h2>Login User</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control mb-3' placeholder='Email'/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control mb-3' placeholder='Password'/>
            <button onClick={LoginUser} className='btn btn-sm btn-primary'>Giriş</button>
        </div>
    )
}

export default Login