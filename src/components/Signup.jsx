import React from "react";

const Signup=()=>{
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signup route */}
                            <form action="/signin" method="POST">
                                <h1 className="centered">Sign Up</h1>
                                <div className="form-group">
                                    <label for="fName">First Name</label>
                                    <input type="text" className="form-control" name="fName" />
                                </div>
                                <div className="form-group">
                                    <label for="lName">Last Name</label>
                                    <input type="text" className="form-control" name="lName" />
                                </div>
                                <div className="form-group">
                                    <label for="lName">Last Name</label>
                                    <input type="text" className="form-control" name="lName" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="userName" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" />
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