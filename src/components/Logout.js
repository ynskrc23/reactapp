import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const Logout = () => {
    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        navigate('/login')
    }

    useEffect(()=>{
        logout();
    },[]);
    
    return (
        <div>Logout</div>
    )
}

export default Logout