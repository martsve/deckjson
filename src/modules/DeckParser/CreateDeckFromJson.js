import { CreateUuid } from '../utilities'

const CreateDeckFromJson = (text, name) => {
  var deck = JSON.parse(text);
  return {
    ...deck,
    id: CreateUuid(),
    name: name
  };
};  

export default CreateDeckFromJson;