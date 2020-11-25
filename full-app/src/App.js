import { useEffect, useRef, useState } from 'react';
import PokeInput from './PokeInput';
import PokeView from './PokeView';
import './App.css';

function App() {
  const [page, setPage] = useState('input');
  const [sprites, setSprites] = useState([]);
  const inputRef = useRef(null);
  const viewRef = useRef(null);

  // callback function for PokeInput
  const addPokemon = (sprite) => {
    sprites.push(sprite)
    setSprites(sprites);
  };

  // set up changing state to switch pages
  useEffect(() => {
    inputRef.current.addEventListener('click', switchPage);
    viewRef.current.addEventListener('click', switchPage);
  });

  const switchPage = (e) => {
    // could use className instead
    if (e.target.textContent === 'Enter Pokemon') {
      setPage('input');
    } else {
      setPage('view');
    }
  };

  // Conditional Rendering
  let currPage;
  if (page === 'input') {
    currPage = <PokeInput addPokemon={addPokemon} />;
  } else {
    currPage = <PokeView spriteList={sprites}/>;
  }

  // logo image from pokeapi.co
  return (
    <main>
      <div>
        <img src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt='Pokemon logo' className='logo' />
      </div>
      <section className='nav-bar'>
        <p className='nav-button' ref={inputRef}>Enter Pokemon</p>
        <p className='nav-button' ref={viewRef}>See Sprites</p>
      </section>
      {currPage}
    </main>
  );
}

export default App;
