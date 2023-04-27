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
  date:{
    type:String,
  },
  title:{
      type:String
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  like:{
    type:Number,
  }

}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
PostSchema.virtual("comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post_id",
});
const Post = mongoose.model("Post", PostSchema);
export default Post;