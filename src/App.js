import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import HimpunanPage from './pages/HimpunanPage';
import DetailHimpunanPage from './pages/DetailHimpunanPage';
import JurusanPage from './pages/JurusanPage';
import SplashPage from './pages/SplashPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App mx-auto overflow-hidden overflow-y-auto mb-[55px] max-w-[430px]">
      <Router>
        <Routes>
          <Route path='/' element={<SplashPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/jurusan' element={<JurusanPage/>}/>
          <Route path='/jurusan/:id' element={<DetailPage/>}/>
          <Route path='/himpunan' element={<HimpunanPage/>}/>
          <Route path='/himpunan/:id' element={<DetailHimpunanPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
