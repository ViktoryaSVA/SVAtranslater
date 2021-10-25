module.exports = (User, info, mongoose) => {
  User.create({
    first_name: info.first_name,
    username: info.username,
    is_bot: info.is_bot,
    language_code: info.language_code,
  }, (err, doc) => {
    mongoose.disconnect();

    if (err) return console.log(err);

    console.log('Saved object user', doc);
  });
};
