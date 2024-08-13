// src/App.js
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home />
      <Route path="/product/:id" component={ProductDetail} />
    </div>
  );
}

export default App;
