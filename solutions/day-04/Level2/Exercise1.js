import React from 'react';
import ReactDOM from 'react-dom';

const Technologies = () => {
  return (
    <div>
      <h1>Technologies</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Technologies />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));