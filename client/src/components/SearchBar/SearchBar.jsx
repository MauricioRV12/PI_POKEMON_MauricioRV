import './SearchBar.css';
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const [name,setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className='Bar'>
        <form  onSubmit={handleSubmit}>
            <input type='text' placeholder='What are you looking for?' value={name} onChange={handleChange}/>
            <NavLink to = {`/detail/${name}`} ><input  type='submit'value ='Search'/></NavLink>
        </form>
        </div>
    )
};

export default SearchBar;