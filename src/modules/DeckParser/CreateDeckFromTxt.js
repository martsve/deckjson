import { CreateUuid } from '../utilities'

const CreateDeckFromTxt = (text, name) => {
  var lines = text.trim().replace('/\r/g','').replace('/\t/g', ' ').replace('/ +/g',' ').split('\n');
  var cards = lines.map(x => {
    var parts = x.split(' ');
    var count = parseInt(parts[0]);
    parts.shift();
    var name = parts.join(' ');
    return {
      count: count,
      name: name
    };
  });

  return {
    id: CreateUuid(),
    name: name,
    cards: cards
  };
};  

export default CreateDeckFromTxt;