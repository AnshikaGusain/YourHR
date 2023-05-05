import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = ({set}) => {
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
        fetch("https://yourhr-backend-g293.onrender.com/signin", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
                else if(user==="User not registered yet") {
                    (document.getElementById("modalAlert")).click();
                }
                else if(user==="Wrong Credentials"){
                    (document.getElementById("modalAlert2")).click();
                }
            })
            .catch((err) => console.log("Error"));
    }
    return (
        <div className="container mt-5">
            {/* <!-- Button trigger modal --> */}
            <button type="button" id="modalAlert" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
            <button type="button" id="modalAlert2" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2"></button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Not Registered</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            User is not registered yet
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                                window.location.reload();
                            }}>Close</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={()=>{
                                navigate("/signup");
                            }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Wrong Credentials</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                                window.location.reload();
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signin route */}
                            <form action="https://yourhr-backend-g293.onrender.com/signin" method="POST" onSubmit={(event) => {
                                handleSubmit();
                                event.preventDefault();
                            }}>
                                <h1 className="centered">Sign In</h1>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-dark">Sign In</button>
                            </form>
                            <div>
                                <p className="m-3">
                                    <span>Don't have an account?</span>
                                    <strong className="m-2 centered" role="button" onClick={() => {
                                        navigate("/signup");
                                    }}>Sign Up</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;