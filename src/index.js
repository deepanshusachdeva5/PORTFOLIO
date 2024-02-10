import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Publications from './views/publications'
import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Work from './views/work'
import Blog from './views/blog'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home></Home>} exact path="/" />
        <Route element={<Work></Work>}  path="/work" />
        <Route element={<Blog></Blog>}  path="/showBlog" />
        <Route element={<Publications></Publications>}  path="/publications" />
        <Route element={<NotFound></NotFound>} path="**" />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
