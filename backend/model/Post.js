import mongoose, {Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  price: {
    type: String,
  },
  type: {
    type: String,
    enum: ["food", "travel", "massage", "fix","relax"],
  },
  locate:{
    type:String,
  },
  img: {
    type: String,
  },

  rate:{
    type:String,
  },
  comment: {
    type: Array,
  },
  date:{
    type:String,
  },
  title:{
      type:String
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required:[true]
  }
});
const Post = mongoose.model("Post", PostSchema);
export default Post;