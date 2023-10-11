import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import validation from "../../../validation";

const Form = () => {

    const [errors, setErrors] = useState({});
    const [addNewPokemon, setAddNewPokemon] = useState({
        name: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setAddNewPokemon({
            ...addNewPokemon,
            [event.target.name]: event.target.value})

            setErrors(validation({...addNewPokemon, [event.target.name]: event.target.value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("form submitted");
        dispatch(addPokemon(addNewPokemon))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" onChange={handleChange} name="name"/>
            {errors.e1 ? (<p>{errors.e1}</p>) 
                : errors.e2 ? (<p>{errors.e2}</p>) 
                : (<p>{errors.p1}</p>)}
            
            <label>Health: </label>
            <input type="text" onChange={handleChange} name="health"/>
            <br/>
            <label>Attack: </label>
            <input type="text" onChange={handleChange} name="attack"/>
            <br/>
            <label>Defense: </label>
            <input type="text" onChange={handleChange} name="defense"/>
            <br/>
            <label>Speed: </label>
            <input type="text" onChange={handleChange} name="speed"/>
            <br/>
            <label>Height: </label>
            <input type="text" onChange={handleChange} name="height"/>
            <br/>
            <label>Weight: </label>
            <input type="text" onChange={handleChange} name="weight"/>
            <br/>

            <button type="submit">Create</button>
            
        </form>
    )
};

export default Form;























// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addPokemon } from "../../redux/actions";
// import { NavLink } from "react-router-dom";

// const Form = () => {
//     const [addNewPokemon, setAddNewPokemon] = useState({
//         name: "",
//         health: "",
//         attack: "",
//         defense: "",
//         speed: "",
//         height: "",
//         weight: "",
//     });

//     const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado

//     const dispatch = useDispatch();

//     const handleChange = (event) => {
//         setAddNewPokemon({
//             ...addNewPokemon,
//             [event.target.name]: event.target.value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch(addPokemon(addNewPokemon));
//         setShowSuccessMessage(true); // Mostrar la leyenda después de enviar el formulario
//     };

//     return (
//         <div>
//             {showSuccessMessage && (
//                 <div className="success-message">El Pokémon se ha creado correctamente</div>
//             )}
//             <form onSubmit={handleSubmit}>
//             <label>Name: </label>
//              <input type="text" onChange={handleChange} name="name"/>
//              <br/>
//              <label>Health: </label>
//              <input type="text" onChange={handleChange} name="health"/>
//              <br/>
//              <label>Attack: </label>
//              <input type="text" onChange={handleChange} name="attack"/>
//              <br/>
//              <label>Defense: </label>
//              <input type="text" onChange={handleChange} name="defense"/>
//              <br/>
//              <label>Speed: </label>
//              <input type="text" onChange={handleChange} name="speed"/>
//              <br/>
//              <label>Height: </label>
//              <input type="text" onChange={handleChange} name="height"/>
//              <br/>
//              <label>Weight: </label>
//              <input type="text" onChange={handleChange} name="weight"/>
//              <br/>
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );
// };

// export default Form;
