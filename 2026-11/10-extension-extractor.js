function getExtension(filename) {
  const extension = filename.split(".")

  if (extension.at(-1) === undefined){
    return "none"
  }
  return extension.at(-1);
}


console.log(getExtension("document.txt"))// should return "txt".
console.log(getExtension("README"))// should return "none".
console.log(getExtension("image.PNG"))// should return "PNG".
console.log(getExtension(".gitignore"))// should return "gitignore".
console.log(getExtension("archive.tar.gz"))// should return "gz".
console.log(getExtension("final.draft."))// should return "none".

/*
Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/