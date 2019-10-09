import React from 'react';
import { connect } from 'react-redux';
import NotFound from './ErrorPages';
import { useDispatch } from "react-redux";
import { SaveAsFile } from "./utilities";

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

  function Headers(columns) {
    return <>{Object.entries(columns).map(([key, val]) => (
      <th key={val}>{val}</th>
    ))}</>
  }

  function GetVal(val) {
    if (val === undefined) return "";
    if (typeof(val) == "boolean") return val ? "X" : "";
    return val;
  }

  function Columns(card, columns) {
    return <>{Object.entries(columns).map(([key, val]) => (
      <td key={val}>{GetVal(card[val])}</td>
    ))}</>
  }

  function Lines(cards, columns) {
    return <>{Object.entries(cards).map(([key, val]) => (
      <tr key={key}>{Columns(val, columns)}</tr>
    ))}</>
  }

  function Table() {
    var columns = new Set();
    for (var item in deck.cards)  {
      var keys = Object.keys(deck.cards[item]);
      for (var i in keys) {
        columns.add(keys[i]);
      }
    } 

    columns = Array.from(columns);

    return <table border='1' width='100%'><thead><tr>{Headers(columns)}</tr></thead><tbody>{Lines(deck.cards, columns)}</tbody></table>
  }

  function exportJson() {
    SaveAsFile(JSON.stringify(deck), deck.name + ".json");
  }

  function exportMtgoText() {
    SaveAsFile(deck.cards.map(x => x.count + ' ' + x.name).join('\n'), deck.name + ".txt");
  }

  return (
    <>
    <h1>View deck</h1>

    <div className='buttons'>
    <button onClick={exportJson}>
      Export deck as JSON
    </button>

    <button onClick={exportMtgoText}>
      Export deck as MTGO text file
    </button>
    </div>

    <div className='buttons'>
    <button onClick={deleteDeck}>
      Delete deck
    </button>
    </div>

    {view === "json" && <pre>{JSON.stringify(deck, null, 2)}</pre>}
    {view !== "json" && <pre>{Table()}</pre>}
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
  view: state.deckView
}))(ViewDeck);
