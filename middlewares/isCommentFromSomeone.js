import Comment from "../models/Comment.js";

export default async(req, res, next) => {
    try {
        let one = await Comment.findById()
        if (one) {
            return res.status(400).json({
                success: false,
                message: "You can't update this comment because belong to someone else.",
                response: one
            })
        } else {
            return next()
        }
    } catch (error) {
        next(error)
    }
}