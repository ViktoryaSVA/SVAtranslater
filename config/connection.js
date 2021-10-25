const mongoose = require('mongoose');

mongoose.connect(process.env.URL).catch((error) => {
  console.log(error);
});

module.exports = {
  mongoose,
};
