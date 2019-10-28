import React, { useState } from 'react';
import { ExportAsMtga } from '../DeckExporter';


function AsTable(deck) {
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

  var columns = new Set();
  for (var item in deck.cards)  {
    var keys = Object.keys(deck.cards[item]);
    for (var i in keys) {
      columns.add(keys[i]);
    }
  } 

  columns = Array.from(columns);

  return <table width='100%'><thead><tr>{Headers(columns)}</tr></thead><tbody>{Lines(deck.cards, columns)}</tbody></table>
}

function AsList(deck) {
  return <pre>{ExportAsMtga(deck)}</pre>;
}

function AsJson(deck) {
  return  <pre>{JSON.stringify(deck, null, 2)}</pre>;
}

const DeckList = ({ deck }) => {
  const [view, setView] = useState("table");

  function GetList(view) {
    switch (view) {
      case "table":
        return AsTable(deck);
      case "json":
        return AsJson(deck);
      default:
        return AsList(deck);
    }
  }

  return (
    <div className='deckListContainer'>
      <ul className='view'>
        <button className={view === "table" ? "active" : ""} onClick={() => setView("table")}>Table</button>
        <button className={view === "list" ? "active" : ""} onClick={() => setView("list")}>List view</button>
        <button className={view === "json" ? "active" : ""} onClick={() => setView("json")}>JSON</button>
      </ul>
      <div className='list'>{GetList(view)}</div>
    </div>);
}

export default DeckList;