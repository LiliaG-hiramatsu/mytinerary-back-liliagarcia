import Activity from '../../models/Activity.js'

export default async (req, res, next) => {
    try {
        let deletedActivity = await Activity.findByIdAndDelete(req.params.id)
        if (deletedActivity) {
            return res.status(200).json({
                success: true,
                message: 'activity deleted',
                response: deletedActivity._id
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'activity not deleted',
                response: null
            })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}