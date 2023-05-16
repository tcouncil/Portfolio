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
      <div className='app container'>
        <Switch>
          <Route path='/' exact={true}>
            <Landing />
            <Footer />
          </Route>
          <Route path='/Portfolio'>
            <Landing />
            <Footer />
          </Route>
          <Route path='/about'>
            <Header />
            <About />
          </Route>
          <Route path='/projects'>
            <Header />
            <div className='landing-card'>
              <Projects />
            </div>
          </Route>
          <Route path='/contact'>
            <Header />
            <div className='landing-card'>
              <Contact />
            </div>
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