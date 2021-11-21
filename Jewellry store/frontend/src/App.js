import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import Home from './components/homepage/Home'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Home/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;

