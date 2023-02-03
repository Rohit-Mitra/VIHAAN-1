import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Judge } from './containers';
import { CTA, Navbar } from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <Possibility />
    <Blog />
    <CTA />
    <Judge />
    <WhatGPT3 />
    <Footer />
  </div>
);

export default App;
