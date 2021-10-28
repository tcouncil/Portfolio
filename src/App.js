import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './Common/Landing';
import PageNotFound from './Common/errors/PageNotFound';
import Header from './Common/Header';
import Footer from './Common/Footer';
import About from './Common/About';
import Projects from './Common/Projects';
import Contact from './Common/Contact';

function App() {
  return (
    <>
      <div className='app'>
        <Switch>
          <Route path='/' exact={true}>
            <Landing />
          </Route>
          <Route path='/about'>
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path='/projects'>
            <Header />
            <Projects />
            <Footer />
          </Route>
          <Route path='/contact'>
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route>
            <Header />
            <PageNotFound />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;