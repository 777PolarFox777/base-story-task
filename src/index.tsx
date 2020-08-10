import React from 'react';
import ReactDOM from 'react-dom';
import * as L from 'leda';
import * as serviceWorker from './serviceWorker';
import 'leda/dist/styles/reset.css';
import 'leda/dist/styles/leda.light.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'leda/dist/styles/lists.css';
import 'leda/dist/styles/helpers.css';
import { Main } from './pages';
import { setupDb } from './db';

setupDb();

ReactDOM.render(
  <React.StrictMode>
    <L.Leda underscoreClassesTransform={L.UnderscoreClasses.CamelCaseTransform}>
      <Main />
    </L.Leda>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
