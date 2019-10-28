const CreateDeckFromTxt = (text, name) => {
  var lines = text.trim().replace(/\r/ig, '').replace(/\t/ig, ' ').replace(/ +/ig, ' ').split('\n');
  var category = null;

  var cards = lines.map(x => {
    if (x.length === 0) {
      category = "Sideboard";
      return null;
    }

    if (x.startsWith('//')) {
      return null;
    }

    var parts = x.split(' ');
    var sideboard = false;
    var edition = null;
    var collectors = null;

    if (x.match(/^[a-zA-Z]+$/))  {
      category = x;
      return null;
    }
    if (parts[0] === "SB:") {
      sideboard = true;
      parts.shift();
    }
    var count = parseInt(parts[0].replace(/x/ig, ""));
    parts.shift();
    var name = parts.join(' ');
    var match = name.match(/(.*?) \(([a-z0-9]+)\) ([a-z0-9]+)$/i);

    if (match) {
      name = match[1];
      edition = match[2];
      collectors = match[3];
    }

    match = name.match(/(.*?) \(([a-z0-9]+)\)$/i);
    if (match) {
      name = match[1];
      edition = match[2];
    }

    return {
      count: count,
      name: name,
      set: edition ? edition : undefined,
      number: collectors ? collectors : undefined,
      sideboard: category === "Sideboard" || sideboard ? true : undefined,
      category: category && category !== "Sideboard" ? category : undefined
    };
  });

  return {
    name: name,
    cards: cards.filter(x => x)
  };
};  

export default CreateDeckFromTxt;