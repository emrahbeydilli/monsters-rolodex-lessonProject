import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [], //initial state
    }
    console.log("constructor");
  }
  componentDidMount(){
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users)=>{
      this.setState(()=>{
        return {monsters:users} //update state
      },()=>{
        console.log(this.state);
      })
    })
  }
  render(){
    console.log("render");
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
