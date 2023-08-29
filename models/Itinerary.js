import { model, Schema, Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type: String, required: true },
    city_id: { type: Types.ObjectId, required: true, ref: "cities" },
    "price": { type: Number, required: true },
    "duration": { type: Number, required: true },
    "tags": [{ type: String, required: true }],
    "photo": { type: String, required: true }
},{
    timestamps: true    //Sello de tiempo: agrega dos propiedades de tiempo (fecha de creacion y fecha de modificacion)
})

let Itinerary = model(collection, schema)
export default Itinerary