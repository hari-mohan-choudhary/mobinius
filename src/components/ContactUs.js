import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header';

import FormInput from './ContactForm';

class ContactUs extends Component {
  render() {
  	return (
  	<div>
     <Header />
     <FormInput />
  </div>
    )
  }
}



export default ContactUs