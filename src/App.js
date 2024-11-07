import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Router from './app/router'
import "./App.css"

export default function App() {
  return <BrowserRouter style={{backgrroundcolor:"black"}}>
      <Router />
    </BrowserRouter>
  
}
