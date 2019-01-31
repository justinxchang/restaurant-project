import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ducks/store'
import routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className='App'>
            <Navbar />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
