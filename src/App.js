import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/details/:id_book' component={Details} />
      </Router>
    );
  }
}

export default App;
