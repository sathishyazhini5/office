const app = require('express')()
 require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())

const client2 = require('./config/db')
const { config } = require('dotenv')
require('./router/routes')(app)
client2.connect()
const port = process.env.PORT || 8500;
app.listen(port,()=>{
    console.log(`server listening on port:${port}`);
});