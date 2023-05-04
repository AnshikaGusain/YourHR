import React from "react";

const Signin = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signin route */}
                            <form action="/signin" method="POST">
                                <h1 className="centered">Sign In</h1>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="username" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" />
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