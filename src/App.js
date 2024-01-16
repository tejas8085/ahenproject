import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carousel/>
      </div>
    )
  }
}
