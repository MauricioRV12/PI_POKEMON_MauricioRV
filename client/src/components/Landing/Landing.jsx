import './Landing.css';
import { NavLink } from "react-router-dom";

const Landing = () => {

    return (
        <div className='img'>
            <div className='land'>
            {/* <h1>Pókemon</h1> */}
            <br/>
            <NavLink to='/home'>
            <button>Ingresar</button>
            </NavLink>
            </div>
        </div>
    )
};

export default Landing;