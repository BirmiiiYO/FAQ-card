import React from 'react';
import { useState } from 'react';
import { Button} from 'antd';
import { LoginOutlined , LogoutOutlined} from '@ant-design/icons';

import {
  BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import Aside from './components/Aside';
import Home from './components/Home';
import Test from './components/Test';
import About from './components/About';

import Logo from "./images/corgi.jpg"
import './App.scss';
import SinglePerson from './components/SinglePerson';
import Smth from './components/Smth';
import Animation from './components/Anumation';
function App() {

  const [swap, setSwap] = useState(false)

  return (
    <Router>
    <div className='container'>
      <header>
        <img src={Logo} alt="logo" style={{width:"100px"}}/>
      <ul>
        <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      <li>zxc</li>
      </ul>
      <Button type="primary" onClick={()=> setSwap(!swap)} icon={swap === true ? <LoginOutlined/> : <LogoutOutlined/>}>zxc</Button>
      
      </header>
      <div className='wrapper'>
        <Aside/>
        <main>
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/person">
            <SinglePerson />
          </Route>
          <Route path="/animation">
            <Animation />
          </Route>
          <Route path="/smth">
            <Smth />
          </Route>
        </Switch>
        </main>
      </div>
    </div>
    </Router>
  );
}

export default App;
