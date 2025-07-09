import React, { useState } from 'react'

function Signup () {
    const [form, setForm] = useState({email: '', password: '', confirmPassword: ''});
    const [message, setMessage] = useState('');

    const handleChange = (e) =>{
        setForm ({...form, [e.target.name]: e.target.value})
    }

    const handleSignup = (e) =>{
        e.preventDefault();
        setMessage('');
        
        const strongPassword = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
        if(!strongPassword.test(form.password)){
            setMessage('Password must be strong (ex, @$123dfghgAAEDG)');
            return;
        }
        if(form.password !== form.confirmPassword){
            setMessage('Password does not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === form.email);

        if(userExists){
            setMessage('Email already exists');
            return;
        }


        const newUser = {
            email: form.email,
            password: form.password
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users));
        setMessage('Signup Successfully!');
        setForm({email:'', password:'', confirmPassword:''});
    }
  return (
    <div>
        <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
            <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
            <input type='password' name = 'password' placeholder='Password' value={form.password} onChange={handleChange} required />
            <input type='password' name='confirmPassword' placeholder='Confirm Password' value={form.confirmPassword} onChange={handleChange} required />
            <button type='submit'>Sign Up</button>
            <p>{message}</p>
        </form>
        
    </div>
  )
}

export default Signup

