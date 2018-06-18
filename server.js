const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


app.listen(port, () => console.log(`Listening on port ${port}`));