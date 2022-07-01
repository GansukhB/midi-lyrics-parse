# midi-lyrics-parse

This package is used for parse lyrics from MIDI file in JSON format.

## Install

```
yarn add midi-lyrics-parse

#or

npm i midi-lyrics-parse
```

### Usage

```javascript
const parseLyrics = require("midi-lyrics-parse");

const parsed = parseLyrics("path/to/file.mid"); // returns json

const parsedPrettry = parseLyrics("path/to/file.mid", true); // returns prettified json
```
