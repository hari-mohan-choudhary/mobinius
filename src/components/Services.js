import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header';

import axios from 'axios';


class Services extends Component {
 constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  

  componentDidMount() {
    axios.get(`http://localhost:8100`)
      .then(res => {
        const posts = res.data;
        console.log(posts)
        this.setState({ posts });
      });
  }
  
  render() {
  	return (
  	<div>
     <Header />
     
     <div>
        <h1></h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.name}</li>
          )}
        </ul>
      </div>
      
  </div>
    )
  }
}


export default Services