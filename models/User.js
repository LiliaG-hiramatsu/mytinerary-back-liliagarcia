//convencion nombre del modelo: pascal case, singular

import { model, Schema } from 'mongoose'

// Lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos
// es decir LA COLECCION (conjunto de documentos/modelos de datos)
let collection = 'users' //siempre en minuscula y en plural

//lo sigte es definir el schema de datos modelo
//es decir EL MOLDE / LA FORMA que tiene que tener mi modelo de datos
let schema = new Schema({
    name: { type: String, required: true }, //por defoult todos los datos son opcionales (required: false)
    lastName: { type: String }, //si es opcional, no necesito agregar el required
    mail: { type: String, required: true, unique: true }, //unique, no permite que se repita, deja crearlo una sola vez
    photo: { type: String, default: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },
    password: { type: String, required: true },
    country: { type: String, required: true }
},{
    timestamps: true    //Sello de tiempo: agrega dos propiedades de tiempo (fecha de creacion y fecha de modificacion)
})
//para crear un modelo de datos utilizo el metodo model pasando como parametros DONDE tengo que crear los docs y con que FORMA
let User = model(collection, schema)
export default User