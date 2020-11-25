import { useEffect, useRef, useState } from 'react';
import PokeInput from './PokeInput';
import PokeView from './PokeView';
import './App.css';

function App() {
  const [view, setView] = useState('input');
  const [sprites, setSprites] = useState([]);
  const inputRef = useRef(null);
  const viewRef = useRef(null);

  // callback function for PokeInput
  const addPokemon = (sprite) => {
    sprites.push(sprite)
    setSprites(sprites);
  };

  // Conditional Rendering
  const switchView = (e) => {
    if (e.target.textContent === 'Enter Pokemon') {
      setView('input');
    } else {
      setView('view');
    }
  };

  useEffect(() => {
    inputRef.current.addEventListener('click', switchView);
    viewRef.current.addEventListener('click', switchView);
  });

  let currView;
  if (view === 'input') {
    currView = <PokeInput addPokemon={addPokemon} />;
  } else {
    currView = <PokeView spriteList={sprites}/>;
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
      {currView}
    </main>
  );
}

export default App;
