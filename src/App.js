import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Home from './components/Home.js';

import ContactUs from './components/ContactUs.js';

import Services from './components/Services.js';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route path='/Services' component={Services} />
      </Router>
    )
  }
}


export default App