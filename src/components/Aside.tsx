import React from 'react'
import { Link } from "react-router-dom"
import "../App.scss"


export default function Aside() {
  return (
    
    <aside>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/animation">Anime</Link>
          </li>
          <li>
            <Link to="/smth">SMTH</Link>
          </li>

        </ul>

        <hr/>
        <div>zxc</div>
    </aside>
   
  )
}
