import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import CollectionSummary from './Summary';
import { GetDeckIdentityClass } from '../utilities';

const Liste = ({ list }) => {
  return Object.entries(list.slice(0, 10)).map( ([key, card]) => {
    var picture = <i className={"large ms " + GetDeckIdentityClass(card)} ></i>;
    if (card.coverArt) {
      picture = <img src={card.coverArt} width='100' alt='deck cover art' />;
    }

    return (
      <div className='tile' key={key}>
        <div className='container'>
          <div className='art'>
            {picture}
          </div>
          <span className='title'>{card.name}</span>      
        </div>
      </div>
    );
  });
}

var Checkbox = ({ state, setState }) => {
  return <input type="checkbox" onClick={(e) => {
    setState(e.target.checked);
  }} defaultChecked={state}></input>
};

const Import = ({ history, decks }) => {
  const [data, setData] = useState(null);
  const [newDecks, setNewDecks] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const dispatch = useDispatch();

  let parseError = "";
  if (data && newDecks === null) {
    try {
      var json = JSON.parse(data);
      var collection = json.decks;
      if (!collection) {
        parseError = "No decks found in the file.";
      }
      else {
        setNewDecks(collection);
      }
    }
    catch {
      parseError = "Unable to parse collection file.";
    }
  }

  let readFile = (e) => {
    var fileInput = e.target;
    var file = fileInput.files[0];
    if (file) {
      var fr = new FileReader();
      fr.onload = (e) => {
        setData(e.target.result);
      };
      fr.readAsText(file);
    }
  };

  let saveCollection = () => {
    var newDeckData = newDecks;
    if (!overwrite) {
      newDeckData = [...decks].concat(newDecks)
    }
    dispatch({ type: "IMPORTCOLLECTION", decks: newDeckData });
    history.push('/decks');
  };

  return (
    <>
    <h1>Import a new collection</h1>
    <section>

    <p>Import a collection of DeckJson decks. </p>
    <pre>{'{ "decks": [...] }'}</pre>
    <p>Tetst files can be found at <a href='https://github.com/martsve/deckjson/'>Github</a>. 
      (<a href='https://github.com/martsve/deckjson/tree/master/test/Collection.json'>Collection 1</a>)
    </p>

    <form key='inputform' action='#' onSubmit={() => false}>
      <div className='form-group'>

      <label>
        <Checkbox state={overwrite} setState={setOverwrite} />
        <span>Overwrite existing collection</span>
      </label>
      </div>

      <br />

      <input key='fileinput' type='file' id='fileinput' onChange={readFile} />
    </form>
    </section>

    {newDecks ? (<section>
      <div className='form-group'>
        <button onClick={saveCollection}>
          <span className='icon-plus'></span>
          Import this collection
        </button>
      </div>

      <CollectionSummary decks={newDecks} />

      <section>
        <h2>Decks in the collection</h2>
        <div className="tiles">
          <Liste list={newDecks} />
        </div>
      </section>
      </section>) : <></>}

    {parseError && <section className='error'>{parseError}</section>}
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(Import);
