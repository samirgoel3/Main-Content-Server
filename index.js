const express = require('express');
const route = require('./routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const { ServerApiVersion } = require('mongodb');
const fileUpload = require('express-fileupload')
const path = require('path')
const Configuration = require('./configuration')


let serverApp = express();
serverApp.set('hostname', Configuration.app_config.hostname);
serverApp.set('port', Configuration.app_config.port);

serverApp.use(fileUpload())

// CORS
serverApp.options('*', cors());
serverApp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
    next();
});

// Middleware

serverApp.use(bodyParser.json({ limit: '50mb', extended: true }));
serverApp.use(bodyParser.urlencoded({ extended: false }));




mongoose.connect('mongodb+srv://MainClusture:94QikJPKmTndGaE3@mainclusture.l3f41ws.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
    dbName: 'Content-Database',
    autoIndex: true,
})
    .then((res) => { console.log('#####---> Mongo DB Connected!'); })
    .catch(err => { console.log("####----> Mongo Db not Connected" + err); });

serverApp.use('/images', express.static(path.join(__dirname, '../images')));


route.init(serverApp)




// starting server
serverApp.listen(serverApp.get("port"), () => {
    console.log(
        "Express Server is listening on - https://" + serverApp.get("hostname") + ":" + serverApp.get("port")
    );
});







