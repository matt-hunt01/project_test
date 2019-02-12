import React, { Component } from 'react';

import './App.scss';
import Header from './Component/header/header';
import Banner from './Component/banner/banner';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Header />
     <Banner />
      </div>
    );
  }
}

export default App;
