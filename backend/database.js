const mongoose = require('mongoose')

const mongoDB_URI =
  'mongodb+srv://modassirimran904:d0yAvEZ1LNTCsvNY@cluster0.adzks.mongodb.net/foodOrder'

const mongoDB = async () => {
  try {
    // Establish connection to the MongoDB server
    await mongoose.connect(mongoDB_URI)
    console.log('DB is Connected')

    // Fetch the data from the 'food_item' collection
    const fetched_data = await mongoose.connection.db
      .collection('food_item')
      .find({})
      .toArray()

    // Fetch the data from the 'food_category' collection
    const foodCategory = await mongoose.connection.db
      .collection('food_category')
      .find({})
      .toArray()

    // Store the fetched data in global variables
    global.fetched_data = fetched_data
    global.foodCategory = foodCategory

    // console.log(global.fetched_data);
    // console.log(global.foodCategory);
  } catch (err) {
    // Handle any errors that occur during the connection or data fetching
    console.error('---', err)
  }
}

module.exports = mongoDB
