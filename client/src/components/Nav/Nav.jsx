import './Nav.css'
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {

    const location = useLocation(); // condicional para visualizacion de la barra 
    const isFormPage = location.pathname === '/';

    if (isFormPage) {
        return null;
    };

    return (
        <div>
            <SearchBar/>

            <div className="Position">
                <NavLink to='/home' className='Nav'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/form' className='Nav'>
                    <button>Create Pokemon</button>
                </NavLink>
            </div>

        </div>
    )
};

export default Nav;