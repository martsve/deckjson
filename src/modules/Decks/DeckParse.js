import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { CreateDeckFrom } from '../DeckParser'
import { GetFilenameType } from '../utilities'
import DeckList from "./DeckList";

const DeckParse = ({ history }) => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [type, setType] = useState(null);
  const [deck, setDeck] = useState(null);

  const dispatch = useDispatch();

  let parseError = "";
  if (data && deck === null) {
    var result = CreateDeckFrom(data, type, name);
    if (result.success) {
      setDeck(result.deck);
    }
    else {
      parseError = result.error;
    }
  }

  let readFile = (e) => {
    var fileInput = e.target;
    var file = fileInput.files[0];
    if (file) {
      var fr = new FileReader();
      fr.onload = (e) => {
        setData(e.target.result);
        setType(GetFilenameType(file.name));
        setName(file.name);
        setDeck(null);
      };
      fr.readAsText(file);
    }
  };

  let changeName = (name) => {
    setName(name);
    setDeck(null);
  };

  let saveDeck = () => {
    dispatch({ type: "SAVEDECK", deck: deck });
    setDeck(null);
    setData(null);
    history.push(deck.id);
  };

  return (
    <>
    <h1>Import a new deck</h1>
    <section>

    <p>Import most standard deck formats. Use .txt file extension if you are unsure. Tetst files can be found at <a href='https://github.com/martsve/deckjson/'>Github</a>. 
      (
      <a href='https://github.com/martsve/deckjson/tree/master/test/delver.csv'>Delver lens csv</a>,
      <a href='https://github.com/martsve/deckjson/tree/master/test/arena.txt'>Arena list</a>,
      <a href='https://github.com/martsve/deckjson/tree/master/test/mtgo.txt'>MTGO list</a>,
      <a href='https://github.com/martsve/deckjson/tree/master/test/misc.dec'>Misc dec/dek file</a>,
      <a href='https://github.com/martsve/deckjson/tree/master/test/strange.txt'>Guess file</a>,
      )
    </p>

    <form key='inputform' action='#' onSubmit={() => false}>
      <input key='fileinput' type='file' id='fileinput' onChange={readFile} />
    </form>
    </section>

    {deck ? (<section>
      <div className='form-group'>
        <label htmlFor='deckNameInput'>Deck name</label>  
        <input id='deckNameInput' value={name} onChange={e => changeName(e.target.value)} />

        <button onClick={saveDeck}>
          <span className='icon-plus'></span>
        </button>
      </div>

      <DeckList deck={deck} />
      </section>) : <></>}

    {parseError && <section className='error'>{parseError}</section>}
    </>
  );
}

export default connect(state => ({

}))(DeckParse);
