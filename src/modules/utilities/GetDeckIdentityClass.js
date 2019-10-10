const GetDeckIdentityClass = (deck) => {
  var type = "planeswalker";

  var types = {
    "": "c",

    "W": "w",
    "U": "u",
    "B": "b",
    "R": "r",
    "G": "g",

    "UW": "guild-azorius",
    "BW": "guild-orzhov",
    "RW": "guild-boros",
    "GW": "guild-selesnya",
    "BU": "guild-dimir",
    "BG": "guild-golgari",
    "GR": "guild-gruul",
    "RU": "guild-izzet",
    "BR": "guild-rakdos",
    "GU": "guild-simic",

    "BGW": "clan-abzan",
    "RUW": "clan-jeskai",
    "BRW": "clan-mardu",
    "BGU": "clan-sultai",
    "GRU": "clan-temur",

    "BGR": "clan-atarka",
    "GUW": "clan-dromoka",
    "BRU": "clan-kolaghan",
    "BUW": "clan-ojutai",
    "GRW": "clan-silumgar",

    "GRUW": "planeswalker",
    "BRUW": "planeswalker",
    "BGUW": "planeswalker",
    "BGRW": "planeswalker",
    "BGRU": "planeswalker",

    "BGRUW": "planeswalker",
  };

  if (deck.colorIdentity !== undefined && types[deck.colorIdentity]) {
    type = types[deck.colorIdentity];
  }

  return "ms-" + type;
}

export default GetDeckIdentityClass;
