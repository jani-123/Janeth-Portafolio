import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route , Redirect} from 'react-router-dom';
import { Provider } from "redux-zero/react";
import store from "./store";
import { Redirect } from '../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';

const Index = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route  path="/Janeth-Portafolio" render={ () => <Redirect to="/"/>}/>
      </Switch>
    </HashRouter>
  </Provider>
); 

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
 