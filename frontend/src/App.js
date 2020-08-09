import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login, Wol, Blog, Shell } from './pages'
import { Header } from './components'
import { inject } from 'mobx-react';
import './App.css';

@inject('userStore')
class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/wol' component={Wol} />
          <Route path='/blog' component={Blog} />
          <Route path='/shell' component={Shell} />
        </Switch>
      </Router>
    );
  }
}

export default App;
