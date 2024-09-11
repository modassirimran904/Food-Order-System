const express = require('express')

const cors = require('cors');
const app = express()

app.use(cors());


const port = 5000



const mongoDB = require('./database')
mongoDB()

// Corrected Middleware for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next();
})

app.use(express.json())
app.use('/api', require('./routes/CreateUser'))
app.use('/api', require('./routes/DisplayData'))
app.use('/api', require('./routes/OrdersData'))
app.use('/api',require('./routes/MyOrderData'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



