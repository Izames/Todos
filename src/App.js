import React from 'react';
import { BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
 import Create from "./components/Create"
 import Edit from "./components/Edit"
 import Main from "./components/Main"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Main/>} />
        <Route path='/Create' element = { <Create/> } />
        <Route path='/Edit' element = { <Edit/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
