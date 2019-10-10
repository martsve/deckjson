import React from 'react';
import { connect } from 'react-redux';
import NotFound from './ErrorPages';
import { useDispatch } from "react-redux";
import { SaveAsFile, SetIdentity, GetDeckIdentityClass } from "./utilities";
import { ExportAsMtga, ExportAsTxt, ExportAsDec } from "./DeckExporter";
import DeckList from "./DeckList";

const ViewDeck = ({ history, match, decks }) => {
  const dispatch = useDispatch();

  var id = match.params.id;
  var deck = { ...decks.filter(x => x.id === id)[0] };
  if (!deck) {
    return <NotFound />
  }

  var deckIndex = decks.indexOf(decks.filter(x => x.id === id)[0]);

  function deleteDeck() {
    dispatch({ type: "DELETEDECK", id: id });
    history.push("/decks");
  }

  function exportJson() {
    SaveAsFile(JSON.stringify(deck, null, 2), deck.name + ".json");
  }

  function exportText() {
    SaveAsFile(ExportAsTxt(deck), deck.name + ".txt");
  }

  function exportMtga() {
    SaveAsFile(ExportAsMtga(deck), deck.name + ".clip");
  }

  function exportDec() {
    SaveAsFile(ExportAsDec(deck), deck.name + ".dek");
  }

  const setCommander = async (index) => {
    for (var item in deck.cards) {
      deck.cards[item].commander = undefined;
    }

    if (index === 0) {
      dispatch({ type: "UPDATEDECK", deck: deck });
    }
    else {
      deck.cards[index - 1].commander = true;
      deck = await SetIdentity(deck);
      dispatch({ type: "UPDATEDECK", index: deckIndex, deck: deck });
    }
  }


  return (
    <>
    <h1><i className={"large ms " + GetDeckIdentityClass(deck)} ></i> {deck.name}</h1>

    <div className='buttons'>
      Set commander: {" "}
      <select onChange={async (e) => await setCommander(parseInt(e.target.options[e.target.selectedIndex].value))}>
        <option value='0'></option>
        {deck.cards.map( (card, key) => {
          return <option selected={card.commander ? "selected" : ""} key={key} value={parseInt(key) + 1}>{card.name}</option>;
        })}
      </select>
    </div>

    <div className='buttons'>
      <button onClick={exportJson}>
        Export deck as JSON
      </button>

      <button onClick={exportText}>
        Export deck as text file
      </button>
      
      <button onClick={exportMtga}>
        Export deck as MTGA clipboard
      </button>

      <button onClick={exportDec}>
        Export deck as MTGO .dek
      </button>

      <button onClick={deleteDeck}>
        <span className='icon-trash-empty'></span>
      </button>
    </div>

    <DeckList deck={deck} />
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(ViewDeck);
