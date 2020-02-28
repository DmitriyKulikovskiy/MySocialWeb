import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';

function MyWeb() {
  return (
    <div className="main-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default MyWeb;


