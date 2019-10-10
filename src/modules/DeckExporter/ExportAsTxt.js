const ExportAsTxt = (deck) => {
  return deck.cards.map(x => (x.sideboard ? "SB: " : "") + x.count + ' ' + x.name).join('\n');
};  

export default ExportAsTxt;
