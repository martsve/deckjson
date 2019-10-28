import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom'
import DeckParse from './DeckParse';
import ViewDeck from './ViewDeck';
import NotFound from '../ErrorPages';
import Overview from './Overview';
import { GetDeckIdentityClass } from '../utilities';

const Liste = ({ list }) => {
  return (
    <ul>
      {Object.entries(list).map( ([key, value]) => (
      <li key={key}>
        <NavLink activeClassName='active' to={"/decks/" + value.id}>
          <span className='title'>
            <i className={"ms " + GetDeckIdentityClass(value)} ></i> {" "}
            {value.name}
          </span>           
        </NavLink>
      </li>
      ))}
      
      <li key="import">
      <NavLink activeClassName='active' to="/decks/import">
        <span className='title'><span className='icon-plus'></span> Import</span>           
      </NavLink>
      </li>
    </ul>
  );
}

const Index = ({ decks }) => {
  return (
    <>
    <div className='SideBar'>
      <Liste list={decks} />
    </div>
    <div className="Main">
      <Switch>
        <Route path="/decks/import" component={DeckParse} />
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
}))(Index);
