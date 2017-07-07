import React, { Component } from 'react'

import { Link } from 'react-router'
import './App.css'; 
import Header from './Header';
import HomeMain from './HomeMain';

class Home extends Component {
  render() {
  	return (
  	<div>
  <Header/>
  
  <HomeMain/>
  </div>
    )
  }
}


export default Home