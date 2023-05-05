import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ set }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const handleSubmit = () => {
        fetch("https://yourhr-backend-g293.onrender.com/signup", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user._id) {
                    set(user);
                    navigate("/home");
                }
                else if(user==="Already registered") {
                    (document.getElementById("modalAlert")).click();
                }
            })
            .catch((err) => console.log("Error"));
    }
    return (
        <div className="container mt-5">
            {/* <!-- Button trigger modal --> */}
            <button type="button" id="modalAlert" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Already Registered</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            User is already registered yet
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={() => {
                                navigate("/signin");
                            }}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signup route */}
                            <form method="POST" action="https://yourhr-backend-g293.onrender.com/signup" onSubmit={(event) => {
                                handleSubmit();
                                event.preventDefault();
                            }}>
                                <h1 className="centered">Sign Up</h1>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" name="firstname" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-dark">Sign Up</button>
                            </form>
                            <div>
                                <p className="m-3">
                                    <span>Already have an account?</span>
                                    <strong className="m-2 centered" role="button" onClick={() => {
                                        navigate("/signin");
                                    }}>Sign In</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;