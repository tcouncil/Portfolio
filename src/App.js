import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './Common/Landing';
import Footer from './Common/Footer';

function App() {
  return (
    <>
      <div className='app container'>
        <Switch>
          <Route>
            <Landing />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;