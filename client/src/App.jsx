import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
      <h1>Henry Pokemon</h1>
    </div>
  );
}

export default App;
