import React from 'react'
import { Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Router>
        <Router path="/" element={<Home />} />
        {

        }
      </Router>
    </Router>
  )
}

export default App