import React from 'react';
import './App.css';
import Configuration from '../modules/Configuration';
import DeckList from '../modules/DeckList';
import NotFound from '../modules/ErrorPages';

import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, NavLink  } from 'react-router-dom'
import { store } from '../store';

const IndexPage = () => (<div className="Main"><h1>Index</h1></div>);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className='sm-flex'>
          <NavLink exact activeClassName='active' to="/">Home</NavLink>
          <NavLink activeClassName='active' to="/decks/">Decks</NavLink>
          <NavLink activeClassName='active' to="/config">Configuration</NavLink>
        </nav>
        <div className="Body">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/decks" component={DeckList} />
            <Route path="/config" component={Configuration} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
