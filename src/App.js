import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
