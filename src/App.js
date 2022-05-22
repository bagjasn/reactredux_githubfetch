import React from 'react'
import SearchBar from './components/SearchBar.js'
import Result from './components/Result.js'
function App() {
  return (
   <div>
    <center> <h1 style={{marginTop:"50px"}}>Search Repos</h1></center>
    <SearchBar/>
    <Result/> 
   </div>
  );
}

export default App;
