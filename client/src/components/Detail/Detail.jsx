import './Detail.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

//const stats = {};

const Detail = () => {
    const {id} = useParams();
    console.log(id);

    const [pokeState, setPokeState] = useState({});
    //console.log(country);

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(({ data }) => {
            console.log(data);
            if (data.name) {
              setPokeState(data);
            } else {
              window.alert('No hay pokemons con ese ID');
            }
          })
          .catch(error => {
            console.error('Error en la solicitud HTTP:', error);
          });
      }, [id]);

      return (
        <div className="det">
          
            <img src={pokeState.sprites?.other['official-artwork']?.front_default} alt={pokeState.name} />
            
            <div className="info">
                <h2>Id: {pokeState.id && pokeState.id}</h2>
                <h2>Name: {pokeState.name && pokeState.name}</h2>
                <h2>Health: {pokeState.stats && pokeState.stats.find(stat => stat.stat.name === 'hp')?.base_stat}</h2>
                <h2>Attack: {pokeState.stats && pokeState.stats.find(stat => stat.stat.name === 'attack')?.base_stat}</h2>
                <h2>Defense: {pokeState.stats && pokeState.stats.find(stat => stat.stat.name === 'defense')?.base_stat}</h2>
                <h2>Speed: {pokeState.stats && pokeState.stats.find(stat => stat.stat.name === 'speed')?.base_stat}</h2>
                <h2>Height: {pokeState.height && pokeState.height}</h2>
                <h2>Weight: {pokeState.weight && pokeState.weight}</h2>
                <h2>Types: {pokeState.types?.map(stat => stat.type.name).join(', ')}</h2>
            </div>

        </div>
    )
      
};

export default Detail;


// ID.
// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Tipo.