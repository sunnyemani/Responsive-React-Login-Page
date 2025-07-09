import React, { useState } from 'react'

function Login () {
    const [form, setForm] = useState({email: '', password:''});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleLogin = (e) =>{
        e.preventDefault();


        const users = JSON.parse(localStorage.getItem('users')) || [];

        const storedUser = users.find(user => user.email === form.email && user.password === form.password);
        if(storedUser){
             setMessage('Login Successfully!');
             setForm({email:'', password:''});
        }else{
             setMessage('Invalid email or password');
        }
    }
  return (
    <div>
        
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
            <input type='email' name = 'email' placeholder='Email' value={form.email} onChange={handleChange} required /> 
            <input type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} required />
            <button type='submit'>Login</button>
            <p>{message}</p>
        </form>
        
    </div>
  )
}

export default Login