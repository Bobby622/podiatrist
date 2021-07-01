const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})


app.listen(PORT, err => {
    if (err) {
        throw err;
    }

    console.log(`Server started on port ${PORT}`)
})