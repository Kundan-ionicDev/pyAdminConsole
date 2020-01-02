const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use("/admin",express.static(path.join(__dirname,'dist/PyTicketAdminConsole')))

const port = process.env.PORT || 8003;

app.set('port',port)

const server = http.createServer(app);
server.listen(port,()=> console.log('Running'))