import './Landing.css';
import { NavLink } from "react-router-dom";

const Landing = () => {

    return (
        <div className='img'>
            <div className='land'>
            <br/>
            <NavLink to='/home'>
            <button>Ingresar</button>
            </NavLink>
            </div>
            <div className='trapezoid'>
            <div className='content'>
            <p>La franquicia que comenzó como un videojuego </p>
            <p>y escaló a dimensiones globales de entretenimiento.</p>
            <p>¡Ahora puedes tener tu propia pokedex </p>
            <p>y encontrar la información de cualquier pokemon!</p>
            </div>
            </div>
        </div>
    )
};

export default Landing;