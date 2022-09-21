// const apiRoutes = require('./apis');
// const express = require("express");

const init = (server) => {

    server.use('*', (req, res, next) => {
        console.log('Request was made to : ' + req.method + " -> " + req.originalUrl+ '\n*******************');
        next();
    });


    server.get('/', (req, res)=>{
        res.send('Hi I am CONTENT SERVER, and i will save file and provide urls.')
    })

    // server.use('/api', apiRoutes);

};




module.exports = {
    init: init
};
