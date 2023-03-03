import React,{useState} from 'react'
import { useNavigate } from 'react-router'

export const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function Save(){
        let item = {name,mobile,password,email}
        let result = await fetch("http://127.0.0.1:8000/api/register-user",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result",result);
        if(result['email'] === "Email already exists"){
            alert(result["email"]);
        }
        else {
            navigate("/thanks");
        }
    }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h4 className='mt-3 mb-3'>Kayıt Ol</h4>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3' placeholder='enter name'></input>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control mb-3' placeholder='enter email'></input>
        <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} className='form-control mb-3' placeholder='enter mobile'></input>
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control mb-3' placeholder='enter password'></input>
        <button onClick={Save} className='btn btn-sm btn-primary'>Kayıt ol</button>
    </div>
  )
}

export default Register