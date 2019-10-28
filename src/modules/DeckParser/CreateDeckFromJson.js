const CreateDeckFromJson = (text, name) => {
  var deck = JSON.parse(text);
  if (!deck.cards) {
    return null;
  }
  return {
    ...deck,
    name: name
  };
};  

export default CreateDeckFromJson;