import React from 'react'
import { Link } from 'react-router-dom';

export default function Forms() {
    return (
        <div className="container mt-5">
            <h2>Select a Form</h2>
            <div className="dropdown mt-3">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="formDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Choose a Form
                </button>
                <ul className="dropdown-menu" aria-labelledby="formDropdown">
                    <li>
                        <Link className="dropdown-item" to="/forms/login">Login Form</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/forms/registration">Registration Form</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/forms/feedback">Feedback Form</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
