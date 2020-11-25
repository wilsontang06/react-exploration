import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <main>
      <Welcome />
      <h2>CSE 154 is Awesome!</h2>
    </main>
  );
}

function Welcome() {
  return <h1>Welcome!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
