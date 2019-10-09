import { CreateDeckFromCsv, CreateDeckFromJson, CreateDeckFromTxt, CreateDeckFromDek } from '.'

const CreateDeckFrom = (text, type, name) => {
  if (type === "csv") {
    return {
      success: true,
      deck: CreateDeckFromCsv(text, name)
    };
  }

  if (type === "txt" ) {
    return {
      success: true,
      deck: CreateDeckFromTxt(text, name)
    };
  }

  if (type === "dec" || type === "dek") {
    return {
      success: true,
      deck: CreateDeckFromDek(text, name)
    };
  }

  if (type === "json") {
    return {
      success: true,
      deck: CreateDeckFromJson(text, name)
    };
  }

  return {
    success: false,
    error: "Unsupported format",
  };
};  

export default CreateDeckFrom;