import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Stopwatch from './stopwatch/main'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Stopwatch />, document.getElementById('root'));

serviceWorker.unregister();
