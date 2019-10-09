import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom'
import CW from './CounterWidget/CW';
import DeckParse from './DeckParse';
import ViewDeck from './ViewDeck';
import NotFound from './ErrorPages';

const Liste = ({ list }) => {
  return (
    <ul>
      <li key="import">
      <NavLink activeClassName='active' to="/decks/import">
        <span className='title'>Import deck</span>           
      </NavLink>
      </li>

      {Object.entries(list).map( ([key, value]) => (
      <li key={key}>
        <NavLink activeClassName='active' to={"/decks/" + value.id}>
          <span className='title'>{value.name}</span>           
        </NavLink>
      </li>
      ))}
    </ul>
  );
}

const IndexPage = () => (<h1>Index</h1>);

const DeckList = ({ decks }) => {
  return (
    <>
    <div className='SideBar'>
      <Liste list={decks} />
    </div>
    <div className="Main">
      <Switch>
        <Route path="/decks/import" component={DeckParse} />
        <Route path="/decks/cw" component={CW} />
        <Route path="/decks/:id" component={ViewDeck} />
        <Route path="/decks" component={IndexPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(DeckList);
