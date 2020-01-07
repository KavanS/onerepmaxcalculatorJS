const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});