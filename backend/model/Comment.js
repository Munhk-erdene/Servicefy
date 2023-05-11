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
 },
 date:{
  type: Date, default: Date,
},
 rate:{
  type:String,
  enum:["0.5","1","1.5","2","2.5","3","3.5","4","4.5","5"]
 }

});
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;