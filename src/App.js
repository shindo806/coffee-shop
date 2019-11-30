import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './Styles/main.scss';
import './Styles/menu.scss';
import Navbar from './Components/Menu'

import categories from './database/database';


function App() {
  console.log(categories.iceblend);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
