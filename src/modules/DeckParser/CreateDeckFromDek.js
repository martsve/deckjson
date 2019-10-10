const CreateDeckFromDek = (text, name) => {
  var lines = text.trim().replace(/\r/ig, '').replace(/\t/ig, ' ').replace(/ +/ig, ' ').split('\n');

  var cards = lines.map(x => {
    if (x.startsWith('//') || x.length === 0) {
      return null;
    }

    var parts = x.split(' ');

    var sideboard = false; 
    if (parts[0] === "SB:") {
      sideboard = true;
      parts.shift();
    }

    var count = parseInt(parts[0].replace(/x/ig, ""));
    parts.shift();
    var name = parts.join(' ');

    return {
      count: count,
      name: name,
      sideboard: sideboard ? true : undefined,
    };
  });

  return {
    name: name,
    cards: cards.filter(x => x)
  };
};  

export default CreateDeckFromDek;