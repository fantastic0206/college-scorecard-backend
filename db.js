const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('./utils/config');

const connectToDB = async () => {
  try {
    // await mongoose.connect(url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // });
    await mongoose.connect("mongodb://127.0.0.1:27017/collegescorecard", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error);
  }
};

module.exports = connectToDB;
