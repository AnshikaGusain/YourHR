import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="d-flex justify-content-around">
                <div className="mr-auto">
                    <h1>ABC</h1>
                </div>
                <div className="signin">
                    <Link to="/signin"><span>Sign In</span></Link>
                </div>
                <div className="signup">
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