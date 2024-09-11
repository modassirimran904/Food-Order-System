const express = require('express')
const router = express.Router()

router.post('/foodData', (req, res) => {
  try {
    //console.log(global.foodCategory)
    res.send([global.fetched_data, global.foodCategory])
  } catch (error) {
    console.error(error.messege)
    res.send('Server error')
  }
})

module.exports = router
