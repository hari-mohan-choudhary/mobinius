import React, { Component } from 'react'
import { Link } from 'react-router'

import './App.css';

class Header extends Component {
  render() {
  	return (
  	
  	<div className="App" >
        <div className="App-header">
    <Link to='/' > <div className="App-link" > Home</div> </Link>&nbsp;
    <Link to='/ContactUs'> <div className="App-link" > ContactUs</div> </Link>
    <Link to='/Services'> <div className="App-link" > Services </div> </Link>


        </div>
      </div>
  
    )
  }
}


export default Header