const http=require('http');
const app=require('./app')
const dotenv = require('dotenv');
dotenv.config();
const server=http.createServer(app);
const port=process.env.PORT || process.env.PORT
server.listen(port);