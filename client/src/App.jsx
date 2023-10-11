import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'; 
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
 
  useEffect(() => {
    axios.get(URL_BASE)
      .then((response) => {
        // datos de la respuesta
        const data = response.data;
        setPokemons(data); 
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home pokemons={pokemons}/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>

    </div>
  );
}

export default App;