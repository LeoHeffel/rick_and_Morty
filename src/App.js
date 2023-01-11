import './App.css'

import Cards from './components/Cards.jsx'
import NavBar from './components/Nav.jsx'
import { useState } from 'react'







function App() {
  const [characters, setCharacters] = useState([])
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if(characters.find(char=>char.id === data.id))window.alert('ID Repetido');
          else setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div >
        <NavBar onSearch={onSearch} />
      </div>
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      <hr />

    </div>
  )
}

export default App
