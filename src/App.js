import React from 'react';

import './Styles/main.scss';
import MainButton from './Components/Button/Button';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <MainButton />
      <div>
        <div className="ui right labeled button" role="button" tabindex="0">
          <button className="ui red button">
            <i aria-hidden="true" className="heart icon"></i>
            Like
    </button>
          <a className="ui red left pointing basic label">2,048</a>
        </div>
        <div className="ui right labeled button" role="button" tabindex="0">
          <button className="ui blue basic button">
            <i aria-hidden="true" className="fork icon"></i>
            Fork
    </button>
          <a className="ui blue left pointing basic label">2,048</a>
        </div>
      </div>
    </div>
  );
}

export default App;
