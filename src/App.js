import { useState, useEffect } from 'react';
import { monsterDoc } from './utils/firebase';

import { MonsterContext } from './context/monster.context';
import { useContext } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  // const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);



  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  const {monsters} =useContext(MonsterContext)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const showdocs = () =>{
    console.log(monsterDoc);
  }

  return (
    <div className='App'>
      <h1 className='title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />


      <button onClick={showdocs}></button>
    </div>
  );
};

export default App;