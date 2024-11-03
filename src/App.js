import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Router from './app/router'

export default function App() {
  return <BrowserRouter>
      <Router />
    </BrowserRouter>
  
}
