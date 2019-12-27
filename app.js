// const express = require('express');
// const http = require('http');
// const path = require('path');
// const app = express();

// app.use("/admin",express.static(path.join(__dirname,'dist/PyTicketAdminConsole')))

// app.get('/admin/ping/',(req,res)=>{
//     res.json({
//      "ping":"pong",
//      "date":new Date()
//     });
//  });

// app.get('/admin',(req,res)=>{
//     res.sendFile(path.join(__dirname,'dist/PyTicketAdminConsole/index.html'))
// });

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/PyTicketAdminConsole/index.html'));
// });

// app.use("/",express.static(path.join(__dirname,'dist/PyTicketAdminConsole')))

// app.use(express.static(__dirname + '/dist'));

// const port = process.env.PORT || 8002;

// app.set('port',port)

// const server = http.createServer(app);
// server.listen(port,()=> console.log('Running'))
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use("/admin",express.static(path.join(__dirname,'dist/PyTicketAdminConsole')))


const port = process.env.PORT || 8003;

app.set('port',port)

const server = http.createServer(app);
server.listen(port,()=> console.log('Running'))