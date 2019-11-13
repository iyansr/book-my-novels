import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import {Provider} from 'react-redux'
import store from './Public/Redux/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id_book' component={Details} />
        </Router>
      </Provider>
    );
  }
}

export default App;
