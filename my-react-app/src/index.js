import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './HelloWorld';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function tick() {
  
  ReactDOM.render(<App />, document.getElementById('root'));

  }

  setInterval(tick, 1000);
  
registerServiceWorker();
