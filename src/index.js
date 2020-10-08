import React from 'react';
import ReactDOM from 'react-dom';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

ReactDOM.render(<Counters />, document.getElementById('root'));
serviceWorker.unregister();
