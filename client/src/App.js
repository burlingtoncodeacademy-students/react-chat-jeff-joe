import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Room1 from './components/room1.js';
import Room2 from './components/room2.js';
import Room3 from './components/room3.js';
import Lobby from './components/lobby.js';
// import Registry from './components/registry.js';
// const mongoose = require('mongoose')
// mongoose.connect("localhost://27017/messages")
function App() {

  return (
    <main>
      <style src="./App.css"></style>
    <div className="App">
    <>
      <div className="header">
        <h1>Chat With Mongoose !</h1>
          </div>
      <div className="sidebarWrap">
        <div className="display">
          <h3>Current Room</h3>
        <div className="content">
          <Routes>
          <Route path='/' element={<Lobby />}>
            </Route>
          <Route path='/room1' element={<Room1 />}>
            </Route>
          <Route path='/room2' element={<Room2 />}>
            </Route>
          <Route path='/room3' element={<Room3 />}>
          </Route>
            </Routes>
          </div>
      <div className='inputs'>
      <form action='/create' method='POST'>
      <input type='text' name='userName' placeholder='Display Name' />
      <input type='text' name='body' placeholder='Send a Message' />
      <button type='submit'>SEND</button>
      <button type='submit'>REFRESH</button>
      </form>
      </div>
      </div>
      <div className="nav">
        <h3>Available Rooms</h3>
        <ul>
        <h4>Rooms</h4>
      <div className='links'>
      <button><Link to='/'>Lobby</Link></button>
      <button><Link to='/room1'>Room 1</Link></button>
      <button><Link to='/room2'>Room 2</Link></button>
      <button><Link to='/room3'>Room 3</Link></button>
      </div>

        </ul>
      </div>
      </div>
      </>
    </div>
    </main>
  );
}

export default App;
