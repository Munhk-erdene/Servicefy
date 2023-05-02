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
    type:String,
    enum:["Franchise","Repair","Massage","Relax","Travel","Health"]
  },
  locate:{
    type:String,
  },
  img: {
    type: String,
    default:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  },
  rate:{
    type:String,
    enum:["0.5","1","1.5","2","2.5","3","3.5","4","4.5","5"]
  },
  date:{
    type: Date, default: Date,
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