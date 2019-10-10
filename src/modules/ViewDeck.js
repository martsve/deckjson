import React from 'react';
import { connect } from 'react-redux';
import NotFound from './ErrorPages';
import { useDispatch } from "react-redux";
import { SaveAsFile } from "./utilities";
import { ExportAsMtga, ExportAsTxt, ExportAsDec } from "./DeckExporter";
import DeckList from "./DeckList";

const ViewDeck = ({ history, match, decks, view }) => {
  const dispatch = useDispatch();

  var id = match.params.id;
  var deck = decks.filter(x => x.id === id)[0];
  if (!deck) {
    return <NotFound />
  }

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

  return (
    <>
    <h1>{deck.name}</h1>

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
    </div>

    <div className='buttons'>
    <button onClick={deleteDeck}>
      Delete deck
    </button>
    </div>

    <DeckList deck={deck} />
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
  view: state.deckView
}))(ViewDeck);
