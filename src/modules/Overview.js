import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetDeckIdentityClass } from './utilities';
const Liste = ({ list }) => {
  return Object.entries(list.slice(0, 10)).map( ([key, card]) => {
    var picture = <i className={"large ms " + GetDeckIdentityClass(card)} ></i>;
    if (card.coverArt) {
      picture = <img src={card.coverArt} width='100' alt='deck cover art' />;
    }

    return (
      <Link className='tile' key={key} to={"/decks/" + card.id}>
        <div className='container'>
          <div className='art'>
            {picture}
          </div>
          <span className='title'>{card.name}</span>      
        </div>
      </Link>
    );
  });
}

const Overview = ({ decks }) => {
  return (
    <>
    <section>
      <h2>New decks</h2>
      <div className='tiles'>
        <Link to='/decks/import' className='tile'>
          <div className='container'>
            <div className='art'>
              <span className='icon-plus large'></span>
            </div>
            <span className='title'>Import a deck</span>
          </div>
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
