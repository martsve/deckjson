import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom'
import CW from './CounterWidget/CW';
import DeckParse from './DeckParse';
import ViewDeck from './ViewDeck';
import NotFound from './ErrorPages';
import Overview from './Overview';

const Liste = ({ list }) => {
  return (
    <ul>
      {Object.entries(list).map( ([key, value]) => (
      <li key={key}>
        <NavLink activeClassName='active' to={"/decks/" + value.id}>
          <span className='title'><span class='icon-folder-empty'></span> {value.name}</span>           
        </NavLink>
      </li>
      ))}
      
      <li key="import">
      <NavLink activeClassName='active' to="/decks/import">
        <span className='title'><span class='icon-plus'></span> Import</span>           
      </NavLink>
      </li>
    </ul>
  );
}

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
        <Route path="/decks" component={Overview} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(DeckList);
