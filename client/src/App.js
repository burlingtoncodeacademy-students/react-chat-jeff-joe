import { useState } from 'react/cjs/react.production.min';
import './App.css';
import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import {Room1, Room2, Room3} from './components'

function App() {
  return (
    <div className="App">
      <>
      <div className="header">
        <h1>Chat With Mongoose !</h1>
      </div>
      <div className="display">
        <h3>Current Room</h3>
        <div className="content">
        <Routes>
        <Route path='/' element={<main />}>
        </Route>
        <Route path='/room1' element={<Room1 />}>
        </Route>
        <Route path='/room2' element={<Room2 />}>
        </Route>
        <Route path='/room3' element={<Room3 />}>
        </Route>
        </Routes>
        </div>
      <input type='text' name='userName' id='userName' />
      <input type='text' name='message' id='message' />
      <button type='submit'>SEND</button>
      <button type='submit'>REFRESH</button>
      </div>
      <div className="nav">
        <h3>Available Rooms</h3>
        <ul>
        <h3>Rooms</h3>
      <button><Link to='/'>Lobby</Link></button>
      <button><Link to='/room1'>Room 1</Link></button>
      <button><Link to='/room2'>Room 2</Link></button>
      <button><Link to='/room3'>Room 3</Link></button>

        </ul>

      </div>
      </>
    </div>
  );
}

export default App;
