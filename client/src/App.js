import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap to change the appearance
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList/>
    </div>
  );
}
}

export default App;
