import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './main/home';
import UserPage from './setting/user';
import SignIn from './authen/signin';
import Notfound from './notfound';

class App extends Component {
  render() {
    return (
      <div>
        <script src="https://unpkg.com/react/umd/react.production.min.js" ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    )
  };
};

export default App;
