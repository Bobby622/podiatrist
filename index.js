const express = require('express');
const path = require('path')
const request = require('request')

const  device = require('express-device');


const PORT = process.env.PORT || 3000

const app = express();

app.use(express.static('public'));
app.use(device.capture());


app.get("*", function(req, res) {
    if (req.device.type === 'bot') {
        request.get('https://podiatristdev.herokuapp.com' + req.path, function(error, response, body) {
          res.send(200, body)
        });
    } else {
        res.sendFile(path.join(__dirname, './index.html'));
    }
  })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
// })


app.listen(PORT, err => {
    if (err) {
        throw err;
    }

    console.log(`Server started on port ${PORT}`)
})