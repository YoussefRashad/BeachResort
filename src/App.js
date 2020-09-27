import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'; 

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
