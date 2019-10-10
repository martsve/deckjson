import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Liste = ({ list }) => {
  return Object.entries(list.slice(0,5)).map( ([key, value]) => (
    <Link className='tile' key={key} to={"/decks/" + value.id}>
      <span className='title'>{value.name}</span>           
    </Link>
  ));
}

const Overview = ({ decks }) => {
  return (
    <>
    <section>
      <h2>New decks</h2>
      <div className='tiles'>
        <Link to='/decks/import' className='tile'>
          <span className='title'>
            <span className='icon-plus large'></span>
            <br />
            Import a deck
            </span>
        </Link>
      </div>
    </section>

    <section>
      <h2>Your collection</h2>
      <div className="tiles">
        <Liste list={decks} />
      </div>
    </section>
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(Overview);
