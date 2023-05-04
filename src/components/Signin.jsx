import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
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
        fetch("http://localhost:3001/signin", {
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
                    navigate("/home");
                }
                // console.log(user);
            })
            .catch((err) => console.log("Error"));
    }
    return (
        <div className="container mt-5">
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" id="alert" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalLong"></button> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Not Registered</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            User is not registered yet, register it first
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.onRouteChange("Register")}>Okay</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signin route */}
                            <form action="http://localhost:3001/signin" method="POST" onSubmit={(event) => {
                                handleSubmit();
                                event.preventDefault();
                            }}>
                                <h1 className="centered">Sign In</h1>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-dark">Sign In</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;