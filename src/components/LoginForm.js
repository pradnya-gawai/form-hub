import React, { useState } from 'react'

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const changeHandler = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })

    }
    const submitHandler = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log("Form Submited")
        localStorage.setItem("email", loginData?.email)
        localStorage.setItem("password", loginData?.password)


    }
    return (
        <div className='container mt-3'
        >
            <form onSubmit={submitHandler}>
                <label className='form-input' > Email</label>
                <input className='form-control' type='email' placeholder="example@gmail.com" name="email"
                    onChange={changeHandler}
                    value={loginData?.email}
                />
                <label className='form-input'>Password</label>
                <input className='form-control' type='password' name="password"
                value={loginData?.password}

                    onChange={changeHandler}
                />
                <button className='btn btn-primary mt-3' type='submit'>Log In</button>

            </form>


        </div>
    )
}
