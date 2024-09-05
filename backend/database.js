const mongoose = require('mongoose');

const mongoDB_URI =
  'mongodb+srv://modassirimran904:d0yAvEZ1LNTCsvNY@cluster0.adzks.mongodb.net/foodOrder';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoDB_URI)
    console.log('Connected to MongoDB');

    const fetched_data = mongoose.connection.db.collection("food_item");
    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (err) {
    console.error('--- ', err);
  }
};

module.exports = mongoDB;
