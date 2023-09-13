import { model, Schema, Types } from "mongoose";
let collection = "comments";
let schema = new Schema(
    {
    text: { type: String, required: true },
    itinerary_id: { type: Types.ObjectId, ref: "itineraries", required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    },
    { timestamps: true }
);
let Comment = model(collection, schema);
export default Comment;
