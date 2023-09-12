import User from '../../models/User.js'

export default async (req, res) => {
    // req es el obj donde el cliente me manda muchos datos importantes acerca de la peticion
    //las prop de req mas importantes son:
    //BODY: objeto que generalmente se envia a traves de formularios
    //PARAMS: suelen ser estaticos como el id de una ciudad a buscar pr ej
    //QUERIES: son opcionales y nos indican algunass consultas/filtros/modos de ver la info de pagina, etc.
    try {
        let newUser = await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'user created',
            response: newUser._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not created',
            response: null
        })
    }
}