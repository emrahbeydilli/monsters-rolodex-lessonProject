import {useState} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  const [searchField,setSearchField] = useState('');
  console.log(typeof searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box' />
      {/* <CardList monsters={filteredMosters} /> */}
    </div>
  );
}

export default App;

