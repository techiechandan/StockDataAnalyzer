const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000; 



//importing route for routes
const appRoute = require('./routes/app_route');
//handling routes
server.use('', appRoute);



//template engine
const ejs = require('ejs');
server.set('view engine','ejs');
server.set('views','views');


server.listen(PORT,(req, res) => {
    console.log(`listing on prot ${PORT}`)
});

