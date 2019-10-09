import { CsvToArray, CreateUuid } from '../utilities'

const CreateDeckFromCsv = (text, name) => {
  var firstLine = text.trim().split('\n')[0];
  var delim = firstLine.indexOf('\t') > -1 ? '\t' : undefined;
  if (delim === undefined) delim = firstLine.indexOf(';') > -1 ? ':' : undefined;
  if (delim === undefined) delim = firstLine.indexOf(',') > -1 ? ',' : undefined;

  var cards = CsvToArray(text.trim(), delim);
  
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

    // eslint-disable-next-line
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
      collectorNumber: get("Collector's number"),
      foil: get("Foil", x => x === "Foil"),
      price: get("Price (total)", x => parseFloat(x)),
      currency: get("Currency"),
      multiverseId: get("MultiverseID"),
      scryfallId: get("Scryfall ID"),
      proxy: get("Tag", x => x.indexOf("Proxy") > -1),
      //raw: getRaw()
    };

    card.price = card.price || get("Price", x => parseFloat(x.split(' ')[1]));
    card.currency = card.currency || get("Price", x => x.split(' ')[0]);
    card.edition = card.edition || get("Edition");

    return card;
  }

  return {
    id: CreateUuid(),
    name: name,
    cards: cards.map(x => lineToCard(x))
  };
};  

export default CreateDeckFromCsv;