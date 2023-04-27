import mongoose, {Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
 user_id:{
    type:String,
    required: [true, "Please login"],
 }

});
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;