module.exports = (Schema) => {
  const userScheme = new Schema({
    first_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    username: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
    is_bot: {
      type: Boolean,
      required: true,
      min: 1,
      max: 100,
    },
  });
  return userScheme;
};
