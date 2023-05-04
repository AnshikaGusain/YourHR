import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState({});
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    const handleSubmit=()=>{
        fetch("http://localhost:3001/signup", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname:data.firstname,
                lastname:data.lastname,
                email:data.email,
                password:data.password
            })
        })
        .then(res=>res.json())
        .then(user=>{
            if(user._id){
                navigate("/home");
            }
            // console.log(user);
        })
        .catch((err)=>console.log("Error"));
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signup route */}
                            <form method="POST" action="http://localhost:3001/signup" onSubmit={(event)=>{
                                handleSubmit();
                                event.preventDefault();
                                }}>
                                <h1 className="centered">Sign Up</h1>
                                <div className="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" className="form-control" name="firstname" onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email"  onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleChange} required/>
                                </div>
                                <button type="submit" className="btn btn-dark">Sign Up</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;