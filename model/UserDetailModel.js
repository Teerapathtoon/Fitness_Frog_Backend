const { mongo } = require("../config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect(mongo, {
    connectTimeoutMS: 3000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err.reason));

const userDetailSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: "User",
  },
  fullName: { type: String, unique: true, required: true },
  gender: { type: Number, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  goal: { type: Number, required: true },
  image: { type: String, required: true },
});

const UserDetailModel = mongoose.model("UserDetail", userDetailSchema);

module.exports = UserDetailModel;
