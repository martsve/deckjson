import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import NotFound from '../ErrorPages';
import { default as Import }  from './Import';
import Overview from './Overview';

const Index = ({ decks }) => {
  return (
    <>
    <div className="Main">
      <Switch>
        <Route path="/collection/import" component={Import} />
        <Route path="/collection" component={Overview} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(Index);
