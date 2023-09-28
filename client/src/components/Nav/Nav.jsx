import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {

    return (
        <div>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
        </div>
    )
};

export default Nav;