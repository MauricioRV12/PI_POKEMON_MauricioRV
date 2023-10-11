import './SearchBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      setError('Please enter a valid Pokémon name.');
    } else {
      setError(null);

      try {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        navigate(`/detail/${name}`);
      } catch (error) {
        setError('The Pokémon does not exist.');
      }
    }
  }

  return (
    <div className='Bar'>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='What are you looking for?' value={name} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
};

export default SearchBar;

