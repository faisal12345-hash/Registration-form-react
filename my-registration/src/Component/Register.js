import React from 'react'

export default function Register(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input className='form-control' required type="text" name="name"/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control' required type="email" name="email"/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input className='form-control'required type="password" name="password"/>
            </div>
            <button className='btn btn-primary' type='submit'>Register</button>
        </form>
    </div>
  )
}
