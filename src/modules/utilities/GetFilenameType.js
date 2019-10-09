function GetFilenameType(filename) {
  filename = filename || "";
  if (filename.toLowerCase().endsWith('.csv')) {
    return "csv";
  }

  if (filename.toLowerCase().endsWith('.json')) {
    return "json";
  }

  if (filename.toLowerCase().endsWith('.txt')) {
    return "txt";
  }

  return null;
}

export default GetFilenameType;