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
        setName(file.name);
        setData(e.target.result);
        setType(GetFilenameType(file.name));
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
    <h1>Parse deck</h1>
    <form key='inputform' action='#' onSubmit={() => false}>
      <input key='fileinput' type='file' id='fileinput' onChange={readFile} />
    </form>

    {deck ? (<div key='info'>
      <input value={name} onChange={e => changeName(e.target.value)} />

      <button onClick={saveDeck}>
        Save deck
      </button>

      <pre>{JSON.stringify(deck, null, 2)}</pre>
    </div>) : <></>}

    {parseError && <p className='error'>{parseError}</p>}
    </>
  );
}

export default connect(state => ({

}))(DeckParse);
