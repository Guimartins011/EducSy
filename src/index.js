import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/assets/css/facilitaStyles.css'
import "tailwindcss/tailwind.css"
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();