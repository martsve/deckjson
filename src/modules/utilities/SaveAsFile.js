function SaveAsFile(text, filename) {
  filename = filename.replace("/[^a-zA-Z0-9\\.\\-]/ig", "_");
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export default SaveAsFile;