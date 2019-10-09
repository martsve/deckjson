import React from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';

// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray( strData, strDelimiter ){
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = (strDelimiter || ",");

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
      (
          // Delimiters.
          "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

          // Quoted fields.
          "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

          // Standard fields.
          "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),
      "gi"
      );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec( strData )){

      // Get the delimiter that was found.
      var strMatchedDelimiter = arrMatches[ 1 ];

      // Check to see if the given delimiter has a length
      // (is not the start of string) and if it matches
      // field delimiter. If id does not, then we know
      // that this delimiter is a row delimiter.
      if (
          strMatchedDelimiter.length &&
          strMatchedDelimiter !== strDelimiter
          ){

          // Since we have reached a new row of data,
          // add an empty row to our data array.
          arrData.push( [] );

      }

      var strMatchedValue;

      // Now that we have our delimiter out of the way,
      // let's check to see which kind of value we
      // captured (quoted or unquoted).
      if (arrMatches[ 2 ]){

          // We found a quoted value. When we capture
          // this value, unescape any double quotes.
          strMatchedValue = arrMatches[ 2 ].replace(
              new RegExp( "\"\"", "g" ),
              "\""
              );

      } else {

          // We found a non-quoted value.
          strMatchedValue = arrMatches[ 3 ];

      }


      // Now that we have our value string, let's add
      // it to the data array.
      arrData[ arrData.length - 1 ].push( strMatchedValue );
  }

  // Return the parsed data.
  return( arrData );
}

const Parse = (text, type, name) => {
  var firstLine = text.trim().split('\n')[0];
  var delim = firstLine.indexOf('\t') > -1 ? '\t' : undefined;
  if (delim === undefined) delim = firstLine.indexOf(';') > -1 ? ':' : undefined;
  if (delim === undefined) delim = firstLine.indexOf(',') > -1 ? ',' : undefined;

  var cards = CSVToArray(text.trim(), delim);
  
  var header = cards[0];
  cards.shift();

  var headerIndex = {};
  header.forEach((val) => {
    headerIndex[val] = header.indexOf(val);
  });
  
  function lineToCard(item) {
    function get(key, invoke) {
      var val = headerIndex[key] !== undefined && headerIndex[key] > -1 ? item[headerIndex[key]] : undefined;
      if (invoke && val !== undefined) val = invoke(val);
      return val;
    }

    function getRaw() {
      var raw = {};
      header.forEach((val) => {
        raw[val] = item[headerIndex[val]];
      });
      return raw;
    }
    
    var card = {
      name: get("Name"),
      count: get("QuantityX", x => parseInt(x.replace('x', ''))),
      edition: get("Edition code"),
      editionName: get("Edition"),
      collectorNumber: get("Collector's number"),
      foil: get("Foil", x => x === "Foil"),
      price: get("Price (total)", x => parseFloat(x)),
      currency: get("Currency"),
      multiverseId: get("MultiverseID"),
      scryfallId: get("Scryfall ID"),
      proxy: get("Tag", x => x.indexOf("Proxy") > -1),
      //raw: getRaw()
    };

    card.price = card.price || get("Price");

    return card;
  }

  return {
    name: name,
    cards: cards.map(x => lineToCard(x))
  };
};  

const DeckParse = ({ fileData, fileType, fileName }) => {
  const dispatch = useDispatch();
  let deck = null;
  if (fileData) {
    deck = Parse(fileData, fileType, fileName);
  }

  let fileInput;

  let readFile = () => {
    var file = fileInput.files[0];
    var fr = new FileReader();
    fr.onload = (e) => {
      var text = e.target.result;
      console.log(file);
      dispatch({ type: "SETFILEDATA", fileData: text, fileType: "csv", fileName: file.name });
    };
    fr.readAsText(file);
  }

  return (
    <>
    <h1>Parse deck</h1>
    <form action='#' onSubmit={() => false}>
      <input type='file' id='fileinput' ref={node => {
            fileInput = node
          }} />
      <input type='button' id='btnLoad' value='Load' onClick={readFile} />
    </form>

    <pre>{deck && JSON.stringify(deck, null, 2)}</pre>
    </>
  );
}

export default connect(state => ({
  fileData: state.fileData,
  fileType: state.fileType,
  fileName: state.fileName
}))(DeckParse);
