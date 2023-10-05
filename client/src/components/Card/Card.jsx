import './Card.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Card = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    }

    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <div className="div">
      {pokemonDetails ? (
        <div>
          <div className='image'>
            <Link to={`/detail/${pokemonDetails.id}`}>
              <img src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
            </Link>
          </div>
          
          <div className='name'>
            <h2>{pokemonDetails.name}</h2>
          </div>

          <div className='cont'>
            <h3>{pokemonDetails.types.map(stat => stat.type.name).join(', ')}</h3>
          </div>
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Card;
