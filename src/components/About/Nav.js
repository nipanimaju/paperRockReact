import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div className="nav">
                    <Link to={"/"}>
                        back
                    </Link>
                    <Link to={"/result"}>
                        top 100
                    </Link>
        </div>
    )
};

export default Nav;