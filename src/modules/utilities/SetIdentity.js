const SetIdentity = async (deck) => {
  var commander = deck.cards.filter(x => x.commander);
  if (commander) {
    try {
      return await fetch('https://api.scryfall.com/cards/named?fuzzy=' + encodeURIComponent(commander[0].name))
      .then(x => x.json())
      .then(data => {
        var identity = data.color_identity;
        identity.sort();
        deck.colorIdentity = identity.join('');
        if (data.card_faces) {
          deck.coverArt = data.card_faces[0].image_uris.art_crop;
        }
        else if (data.image_uris) {
          deck.coverArt = data.image_uris.art_crop;
        }
        return deck;
      });
    } catch { 
      return deck;
    }
  }
}

export default SetIdentity;