import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [], //initial state
      searcField: '',
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
    const filteredMosters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searcField);
    });
    return (
      <div className="App">
        <input
        type='search'
        className='seach-box'
        placeholder='Search Monster'
        onChange={(event)=>{
          console.log(event.target.value);
          const searcField = event.target.value.toLocaleLowerCase();
          this.setState(()=>{
            return {searcField}
          });
        }}/>
        {
          filteredMosters.map((monster)=>{
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
