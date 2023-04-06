import mongoose, { Schema } from "mongoose";

const ServiceSchema = new mongoose.Schema({
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
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  rate:{
    type:String,
    enum:["1","2","3","4","5"]
  },
  comment: {
    type: Array,
  },
});
const Service = mongoose.model("service", ServiceSchema);
export default Service;