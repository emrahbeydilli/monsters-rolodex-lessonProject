import React, { Component } from 'react';
import CardList from "./components/card-list/card-list.component";

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users)=>{
      this.setState(()=>{
        return {monsters:users}
      },()=>{
        console.log(this.state);
      })
    })
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    });
  }

  render(){
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMosters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App"> 
        <input
        type='search'
        className='seach-box'
        placeholder='Search Monster'
        onChange={onSearchChange}/>
        {
          // filteredMosters.map((monster)=>{
          //   return (
          //     <div key={monster.id}>
          //       <h1>{monster.name}</h1>
          //     </div>
          //   )
          // })
          <CardList monsters={filteredMosters}/>
        }
      </div>
    );
  }
}

export default App;
