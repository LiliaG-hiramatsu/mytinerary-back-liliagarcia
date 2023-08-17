import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let oneUser = await User.findOne({ _id:req.params.id }).select("mail photo -_id") //busca segun el objeto de condiciones (en este caso le paso el id)
        // select me sirve para filtrar y traer determinadas propiedades nada mas (lo que le quiero enviar al cliente)
        // let oneUser = await User.findById(req.params.id) busca solo por id
        if (oneUser) {
            return res.status(200).json({
                succes: true,
                message: 'user found',
                response: oneUser
            })
        } else {
            return res.status(404),json({
                succes: false,
                message: 'not found user',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}