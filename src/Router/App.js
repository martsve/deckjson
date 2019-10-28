import React from 'react';
import './App.css';
import Configuration from '../modules/Configuration';
import { default as DeckOverview } from '../modules/Decks/Index';
import { default as CollectionOverview } from '../modules/Collection/Index';
import NotFound from '../modules/ErrorPages';

import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Switch, NavLink, Redirect  } from 'react-router-dom'
import { store } from '../store';

const IndexPage = () => (<Redirect to="/decks/" />);

function App() {
  return (
    <Provider store={store}>
      <Router basename='/'>
        <nav className='sm-flex'>
          <NavLink exact activeClassName='active' to="/"><span className='icon-home medium'></span></NavLink>
          <NavLink activeClassName='active' to="/decks/">Decks</NavLink>
          <NavLink activeClassName='active' to="/collection/">Collection</NavLink>
          <NavLink activeClassName='active' to="/config"><span className='icon-cog medium'></span></NavLink>
        </nav>
        <div className="Body">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/decks" component={DeckOverview} />
            <Route path="/collection" component={CollectionOverview} />
            <Route path="/config" component={Configuration} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
