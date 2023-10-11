import './Home.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderByName, fetchPokemons, orderByAttack } from '../../redux/actions';
import Card from '../Card/Card';

const Home = () => {
  const pokemonsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  
  
  useEffect(() => {
    dispatch(fetchPokemons(1,12));
  }, [dispatch]);
  
  const handleFilter = (event) => {
    const type = event.target.value;
    dispatch(filterCards(type));
  };

  const handleOrderName = (event) => {
    const nameOrder = event.target.value;
    dispatch(orderByName(nameOrder));
  };

  /************************************************************************************************************* */

  const handleOrder = (event) => {
    const type = event.target.value;
    dispatch(orderByAttack(type));
  };
  /*************************************************************************************************************** */

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const paginatedPokemons = pokemons.slice(
    (currentPage - 1) * pokemonsPerPage,
    currentPage * pokemonsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div>
        <select onChange={handleFilter} className='Order'>
          <option>Pokemon Types</option>

          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>

        </select>

        <select onChange={handleOrderName} className='Order'>
          <option>Order</option>
          <option value="A">Z-A</option>
          <option value="B">A-Z</option>
        </select>
      
        <select onChange={handleOrder} className='Order'>
          <option value="attack">Attack</option>
          <option value="less">Less (-)</option>
          <option value="more">More (+)</option>
        </select>
      </div>


      <div>
        {paginatedPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="Ca">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous page
        </button>
        <span>
          Page {currentPage} 
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pokemonsPerPage >= pokemons.length}
        >
          Next page
        </button>
        {/* Controles de paginación */}
      </div>
    </div>
  );
};

export default Home;