import { useState } from "react";
import {actualPage} from '../../redux/actions';
import {useDispatch} from 'react-redux'
//import s from './paginationCSS.module.css'
import Card from "../Card/Card";

export default function Pagination () {

    const pokemonsPerPage = 12; // Cantidad de pokémones por página
  const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const paginatedPokemons = pokemons.slice(startIndex, endIndex);
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
    return (
        <div>
        <div className='Cards'>
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
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= pokemons.length}
        >
          Next page
        </button>
        {/* Controles de paginación */}
      </div>
      </div>
    )
}
