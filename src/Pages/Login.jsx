import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate=useNavigate();

  const login=()=>{
    const uname=document.getElementById('standard-uname').value
    const pass=document.getElementById('standard-password').value
    if(uname==='admin' && pass==='admin'){
      navigate('/admin')
    }else{
      alert("invalid credentials")
    }
  }

  return (
    <>
      <div className='login-bg d-flex justify-content-center align-items-center'>
       <div className="bg-card p-5 text-center rounded-4" style={{width:'400px'}} >
            <h2 className="txt mb-3">Admin Login</h2>
            <TextField name="username"  id="standard-uname" label="username" variant="standard" className="w-100 mb-3"/>
           
            <TextField name="password" type='password'  id="standard-password" label="password" variant="standard" className="w-100 mb-3"/>
          
            <Button onClick={login} variant="contained" className="mt-3 w-100 btnn py-3 mb-3" style={{backgroundColor:'#8A2BE2'}}>Login</Button>
         

          </div>


      </div>
    </>
  )
}

export default Login
