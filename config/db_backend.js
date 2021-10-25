const userScheme = require('../model/User');
const AddUser = require('../AddUser');

module.exports = async function runMongoConnection(mongoose, info) {
  const { Schema } = mongoose;
  const userInfo = userScheme(Schema);

  const User = mongoose.model('user', userInfo);
  AddUser(User, info, mongoose);
};
