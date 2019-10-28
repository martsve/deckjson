import React, { useState } from 'react';
import { ExportAsMtga } from '../DeckExporter';

const DeckList = ({ deck, editable, setDeck }) => {
  const [view, setView] = useState("table");
  const [editIndex, setEditIndex] = useState(null);
  const [editCard, setEditCard] = useState(null);

  function AsTable(deck) {
    function edit(e) {
      var index = parseInt(e.target.dataset.id);
      setEditData(index);
    }

    function setEditData(index)  {
      setEditCard({ ...deck.cards[index] });
      setEditIndex(index);
    }
  
    function save(columns) {
      for (var i in columns) {
        var col = columns[i];
        var val = document.getElementById('edit_' + col).value;
        document.getElementById('edit_' + col).classList.remove('invalid');
        try {
        editCard[col] = val.length ? JSON.parse(val) : undefined;
        }
        catch {
          document.getElementById('edit_' + col).classList.add('invalid');
          return;
        }
      }
      
      var newDeck = { ...deck };
      newDeck.cards[editIndex] = editCard;
      setEditIndex(null);
      setEditCard(null);
      setDeck(newDeck);
    }

    function add() {
      var newDeck = { ...deck };
      newDeck.cards.push({});
      setEditData(newDeck.cards.length - 1);
      setDeck(newDeck);
    }

    function del() {
      var newDeck = { ...deck };
      delete newDeck.cards[editIndex];
      setEditIndex(null);
      setEditCard(null);
      setDeck(newDeck);
    }
    
    function Headers(columns) {
      return <>
        {editable && <th>Edit</th>}
        {Object.entries(columns).map(([key, val]) => (
          <th key={val}>{val}</th>
        ))}
      </>
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
  
    function EditColumns(card, columns) {
      return <>{Object.entries(columns).map(([key, val]) => (
        <div className='editLine' key={val}>
          <b>{val}:</b>
          <input id={'edit_' + val} defaultValue={JSON.stringify(card[val])} />
        </div>
      ))}</>
    }
  
    function Lines(cards, columns) {
      var i = 0;
      return <>
        {Object.entries(cards).map(([key, val]) => {
        var index = i++;
        if (index === editIndex && editCard) {
          return (<tr key={key}>
            <td colSpan='999'>
              <button data-id={index} onClick={() => setEditIndex(null)}>x</button>
              <div className='edit'>
                {EditColumns(editCard, columns)} 
              <div className='buttons'>
                <button data-id={index} onClick={() => save(columns)}>Save</button>
                <button data-id={index} onClick={() => del()}>Delete</button>
              </div>
            </div></td>
          </tr>);
        }
  
        return (<tr key={key}>
            {editable && <td><button data-id={index} onClick={edit}>...</button></td>}
            {Columns(val, columns)} 
          </tr>);
      })}
      {editable && (<tr key='add'>
          <td colSpan='999'>
            <button onClick={() => add()}>+</button>
          </td>
        </tr>)}
      </>
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