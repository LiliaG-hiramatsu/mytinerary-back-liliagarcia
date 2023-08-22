import { model, Schema, Types } from "mongoose";

let collection = "cities"
let schema = new Schema({
    country: { type: String, required: true },
    fundation: { type: Date, required: true },
    population: { type: Number },
    photo: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, default: "edit later" },
    smalldescription: { type: String, default: "edit later" },
    featuredLocation: { type: String, default: "edit later" },
    admin_id: { type: Types.ObjectId, ref: "users", required: true }
    //para relacionar datos en mongo, es necesario referenciar el dato hacia la coleccion que necesito relacionar.
}, {
    timestamps: true
})
//estoy parado en el modelo City de la coleccion cities y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro referenciando con la propiedad ref:"nombre de la coleccion a referenciarse"

let City = model(collection, schema)
export default City