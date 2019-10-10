const CreateDeckFromJson = (text, name) => {
  var deck = JSON.parse(text);
  return {
    ...deck,
    name: name
  };
};  

export default CreateDeckFromJson;