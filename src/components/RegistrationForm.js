import React, { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        dob: '',
        gender: '',
        country: '',
        terms: false,
    });

    const changeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem("registrationData",formData)
        console.log('Form Submitted', formData);
        // Add validation or API call here
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                onChange={changeHandler} 
                value={formData.firstName} 
                required 
                className='form-control'
            />
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                onChange={changeHandler} 
                value={formData.lastName} 
                required 
                className='form-control'

            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={changeHandler} 
                value={formData.email} 
                required 
                className='form-control'

            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={changeHandler} 
                value={formData.password} 
                required 
                className='form-control'

            />
            <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                onChange={changeHandler} 
                value={formData.confirmPassword} 
                required 
                className='form-control'

            />
            <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                onChange={changeHandler} 
                value={formData.phone} 
                pattern="[0-9]{10}" 
                required 
                className='form-control'

            />
            <input 
                type="date" 
                name="dob" 
                onChange={changeHandler} 
                value={formData.dob} 
                required 
                className='form-control'

            />
            <div>
                <label><input type="radio" name="gender" value="male" onChange={changeHandler} required /> Male</label>
                <label><input type="radio" name="gender" value="female" onChange={changeHandler} required /> Female</label>
                <label><input type="radio" name="gender" value="other" onChange={changeHandler} required /> Other</label>
            </div>
            <select name="country" onChange={changeHandler} value={formData.country} required>
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>
            <label>
                <input 
                    type="checkbox" 
                    name="terms" 
                    onChange={changeHandler} 
                    checked={formData.terms} 
                    required 
                /> I agree to the terms and conditions
            </label>
            <button type="submit">Register</button>
        </form>
    );
}
