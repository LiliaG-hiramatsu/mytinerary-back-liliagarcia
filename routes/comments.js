import { Router } from "express";
import create from "../controllers/comments/create.js";
import passport from "../middlewares/passport.js";
import read from "../controllers/comments/read.js";
import update from "../controllers/comments/update.js";
import destroy from "../controllers/comments/destroy.js";
import isCommentFromSomeone from "../middlewares/isCommentFromSomeone.js";

const commentsRouter = Router();

commentsRouter.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    create
);

commentsRouter.get("/", read);

//falta el middlewares para verificar que el usuario que quiere actualizar/eliminar es el mismo usuario que creo el comentario
commentsRouter.put(
    "/:comment_id",
    passport.authenticate("jwt", { session: false }),
    update
);

commentsRouter.delete(
    "/:comment_id",
    passport.authenticate("jwt", { session: false }),
    destroy
);

export default commentsRouter;
