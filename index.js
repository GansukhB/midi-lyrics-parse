const { readFileSync } = require("fs");
const { parseKar, convertKarToAss } = require("kar-to-ass");
const { parse } = require("ass-compiler");

function parseLyrics(filePath, pretty = false) {
  const fileContent = readFileSync(filePath, async function (err, data) {
    return data;
  });
  const kar = parseKar(fileContent);
  const assString = convertKarToAss(kar, {
    offset: 0,
    progressive: false,
  });
  const parsedASS = parse(assString);
  var string = "";
  if (pretty) {
    string = JSON.stringify(parsedASS, null, 4);
  }
  string = JSON.stringify(parsedASS);
  return string;
}
module.exports = parseLyrics;
