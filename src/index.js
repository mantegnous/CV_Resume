import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.css';
import './css/first.css';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
