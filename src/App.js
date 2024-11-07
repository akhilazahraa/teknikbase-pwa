import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App mx-auto overflow-hidden overflow-y-auto mb-[55px] max-w-[430px]">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/jurusan/:id' element={<DetailPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
