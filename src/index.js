import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* 
  Ideas to cover:

  * ReactDOM.render - renders React component to the DOM
  * 'root' element is found in public/index.html
  * import ./index.css is a Webpack feature, not React. In our app we serve css in the traditional way using <link> elements

*/
