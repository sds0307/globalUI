'use strict';

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;