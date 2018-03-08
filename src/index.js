
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/* module hot helps with browser refresh 
   when source code changes.        
*/
if (module.hot){
	module.hot.accept();
}