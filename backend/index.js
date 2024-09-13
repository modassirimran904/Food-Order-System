  const express = require('express')

  const cors = require('cors')
  const app = express()
  const dotenv = require('dotenv');
  dotenv.config();

  app.use(cors(
    {
      origin:['https://food-order-system-six.vercel.app'],
      method:['POST','GET'],
      credential:true
    }
  ))

  const mongoDB = require('./database')
  mongoDB()

  const port = process.env.PORT || 6000

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // Corrected Middleware for CORS
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://food-order-system-six.vercel.app')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

  app.use(express.json())
  app.use('/api', require('./routes/CreateUser'))
  app.use('/api', require('./routes/DisplayData'))
  app.use('/api', require('./routes/OrdersData'))
  app.use('/api', require('./routes/MyOrderData'))



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
