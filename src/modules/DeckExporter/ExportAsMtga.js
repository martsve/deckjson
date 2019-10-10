const ExportAsMtga = (deck) => {

  const ToLine = x => x.count + ' ' + x.name + (x.set && x.number ? (" ("+x.set+") " + x.number) : "");

  var main = deck.cards.filter(x => !x.sideboard);
  var sideboard = deck.cards.filter(x => x.sideboard);

  var list = main.map(ToLine);
  list = list.concat([""]);
  list = list.concat(sideboard.map(ToLine));

  return list.join('\n');
};  

export default ExportAsMtga;
