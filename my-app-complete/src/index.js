import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <main>
      <Welcome name='Wilson'/>
      <h2>CSE 154 is Awesome!</h2>
      <Person />
    </main>
  );
}

function Welcome(props) {
  const { name } = props;
  return <h1>Welcome {name}!</h1>;
}

function Person() {
  const [age, setAge] = useState(0);
  const button = useRef(null);

  const getOlder = () => {
    setAge(age + 1);
  }

  useEffect(() => {
    button.current.addEventListener('click', getOlder);
  });

  return (
    <section>
      <h1>You are {age} years old!</h1>
      <button ref={button}>Get older</button>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
