import { useEffect, useRef } from 'react';

function PokeInput(props) {
  const { addPokemon } = props;
  const formRef = useRef(null);
  const pokeRef = useRef(null);
  const outputRef = useRef(null);

  const URL = 'https://pokeapi.co/api/v2/pokemon/';

  // the same type of fetch call we have seen all quarter!
  const submitPokemon = async (e) => {
    e.preventDefault();
    const output = document.createElement('p');
    try {
      let resp = await fetch(URL + pokeRef.current.value);
      resp = await checkStatus(resp);
      resp = await resp.json();
      let spriteUrl = resp['sprites']['front_default'];
      // invoke callback function to update state
      addPokemon(spriteUrl);
      output.textContent = 'Successfully added ' + resp['name'] + '!';
    } catch(err) {
      output.textContent = 'Couldn\'t find pokemon :(. ' + err;
    }
    outputRef.current.appendChild(output);
    setTimeout(removeSelf, 1000, output);
  };

  // remove an element from DOM
  const removeSelf = (element) => {
    element.remove();
  };

  // same check status we have seen all quarter!
  const checkStatus = async (res) => {
    if (!res.ok) {
      throw new Error('Error: ' + await res.text());
    }
    return res;
  };

  // add event listener to DOM when component renders
  useEffect(() => {
    formRef.current.addEventListener('submit', submitPokemon);
  });

  return (
    <section className='input-form'>
      <div>
        <form ref={formRef}>
          <input type='text' placeholder='Enter Pokemon name' required ref={pokeRef}></input>
          <button>Submit</button>
        </form>
      </div>
      <section ref={outputRef}></section>
    </section>
  )
}

export default PokeInput;