import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";

const Form = () => {

    const [addNewPokemon, setAddNewPokemon] = useState({
        name: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        // types: "",
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setAddNewPokemon({
            ...addNewPokemon,
            [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        dispatch(addPokemon(addNewPokemon))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" onChange={handleChange} name="name"/>
            <br/>
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
            {/* <label>Types: </label>
            <input type="text" onChange={handleChange} name="types"/>
            <br/> */}
            <button type="submit">Create</button>
        </form>
    )
};

export default Form;