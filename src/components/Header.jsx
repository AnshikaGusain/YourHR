import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="d-flex justify-content-around">
                <div className="mr-auto p-2">
                    <h1>YourHR</h1>
                </div>
                <div className="signin p-2">
                    <Link to="/signin"><span>Sign In</span></Link>
                </div>
                <div className="signup p-2">
                    <Link to="/signup">
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </header>
    )
}

export default Header;