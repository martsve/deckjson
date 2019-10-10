import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { CreateDeckFrom } from './DeckParser'
import { GetFilenameType } from './utilities'

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
    <form key='inputform' action='#' onSubmit={() => false}>
      <input key='fileinput' type='file' id='fileinput' onChange={readFile} />
    </form>
    </section>

    {deck ? (<section>
      <div class='form-group'>
        <label for='deckNameInput'>Deck name</label>  
        <input id='deckNameInput' value={name} onChange={e => changeName(e.target.value)} />

        <button onClick={saveDeck}>
          <span class='icon-plus'></span>
        </button>
      </div>

      <pre>{JSON.stringify(deck, null, 2)}</pre>
      </section>) : <></>}

    {parseError && <section className='error'>{parseError}</section>}
    </>
  );
}

export default connect(state => ({

}))(DeckParse);