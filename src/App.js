import React from 'react';
import './App.css';
import { createStore } from 'redux';
import CW from './CW';
import Reset from './Reset';
import DeckParse from './DeckParse';
import { Provider } from 'react-redux'
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'

const LOCALSTORAGEKEY = "DECKJSON";

const initialState = () => {
  var data = localStorage.getItem(LOCALSTORAGEKEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {}
  }

  return {
    count: 0,
    fileData: null,
    fileType: null,
    fileName: null
  };
} 

function reduceState(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
      case 'SETFILEDATA':
        return {
          ...state,
          fileData: action.fileData,
          fileType: action.fileType,
          fileName: action.fileName
        };
      case 'RESET':
          localStorage.removeItem(LOCALSTORAGEKEY);
        return initialState();
    default:
      return state;
  }
}

function reducer(state = initialState(), action) {
  const newState = reduceState(state, action);
  console.log('reducer', { state, action} , newState);
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newState));
  return newState;
}

const store = createStore(reducer);

const IndexPage = () => (<h1>Index</h1>);

const Notfound = () => <h1>Not found</h1>

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section>
          <Router>
            <Link to="/">Home</Link>
            <Link to="/parse">Parse</Link>
            <Link to="/cw">Counter Widget</Link>
            <Link to="/reset">Reset</Link>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/parse" component={DeckParse} />
              <Route path="/cw" component={CW} />
              <Route path="/reset" component={Reset} />
              <Route component={Notfound} />
            </Switch>
          </Router>
          <a href="/cw">with browser reload</a>
        </section>
      </div>
    </Provider>
  );
}

export default App;
