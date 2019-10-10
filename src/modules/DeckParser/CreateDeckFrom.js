import { CreateDeckFromCsv, CreateDeckFromJson, CreateDeckFromTxt, CreateDeckFromDek } from '.'
import { CreateUuid } from '../utilities'

const CreateDeckFrom = (text, type, name) => {
  var deck;
  switch (type) {
    case "csv":
      deck = CreateDeckFromCsv(text, name);
      break;

    case "txt":
      deck = CreateDeckFromTxt(text, name);
      break;

    case "json":
      deck = CreateDeckFromJson(text, name);
      break;

    case "dec":
    case "dek":
      deck = CreateDeckFromDek(text, name);
      break;

    default:
      deck = null;
  }

  if (deck !== null) {
    deck.id = CreateUuid();
    return {
      success: true,
      deck: deck
    };
  }

  return { 
    success: false,
    error: "Unsupported format",
  };
};  

export default CreateDeckFrom;