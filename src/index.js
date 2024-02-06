import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Work from './views/work'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home></Home>} exact path="/" />
        <Route element={<Work></Work>}  path="/work" />
        <Route element={<NotFound></NotFound>} path="**" />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
