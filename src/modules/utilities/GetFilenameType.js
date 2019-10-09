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

  if (filename.toLowerCase().endsWith('.dec')) {
    return "dec";
  }

  if (filename.toLowerCase().endsWith('.dek')) {
    return "dek";
  }

  return null;
}

export default GetFilenameType;