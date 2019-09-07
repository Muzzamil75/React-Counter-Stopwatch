import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';
// import Stopwatch from './stopwatch/main'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Counters />, document.getElementById('root'));

serviceWorker.unregister();