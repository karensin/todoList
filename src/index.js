import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Main from './components/Main.js';



ReactDOM.render(
  <BrowserRouter basename="/todoList">

    <main>

      <Route exact path="/" component={Main} />

    </main>

  </BrowserRouter>
  , document.getElementById('root'))
