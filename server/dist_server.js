'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
//         jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
//     issuer: '{YOUR-AUTH0-DOMAIN}',
//     algorithms: ['RS256']
// });

var medicinesArray = [{
    name: "Advil",
    time: "5pm",
    id: 0
}, {
    name: "Claritin",
    time: "8pm",
    id: 1
}];

app.get('/medicinelist', function (req, res) {
    res.json(medicinesArray);
});

app.get('/medicinedetails/:id', function (req, res) {
    res.json(medicinesArray.find(function (medicine) {
        return medicine.id == req.params.id;
    }));
});

app.post('/addnewmedicine', function (req, res) {
    console.log(req.body);
    var name = req.body.name.name;
    var time = req.body.time.time;
    var id = medicinesArray.length;

    medicinesArray.push({ name: name, time: time, id: id });

    //res.send(name + ' ' + time + ' ' + id);
});

app.listen(3333);
console.log('Listening on localhost:3333');
