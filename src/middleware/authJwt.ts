import jwt from "jsonwebtoken";
import db from "../model/index"
import { secret } from "../infra/db/config";
import { Request, Response, NextFunction } from "express";
const Usuario = db.user;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers?.Authorization;

    if (!token) {
        return res.status(403).send({
            message: "Nenhum token Informado!"
        });
    }
    if(token.length > 1) return res.status(401).json({message: 'token mal formatado'})

    jwt.verify(token[0],
        secret,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.params.userId = decoded.id;
            next();
        });
};

const isAdmin = (req, res, next) => {
    Usuario.findByPk(req.userId).then(usuario => {
        usuario.getPerfils().then(perfis => {
            for (let i = 0; i < perfis.length; i++) {
                if (perfis[i].nome === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Requer acesso de Administrador!"
            });
            return;
        });
    });
};

const isModerator = (req, res, next) => {
    Usuario.findByPk(req.userId).then(usuario => {
        usuario.getPerfils().then(perfis => {
            for (let i = 0; i < perfis.length; i++) {
                if (perfis[i].nome === "moderator") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Requer acesso de Moderador!"
            });
        });
    });
};

const isModeratorOrAdmin = (req, res, next) => {
    Usuario.findByPk(req.userId).then(usuario => {
        usuario.getPerfils().then(perfis => {
            for (let i = 0; i < perfis.length; i++) {
                if (perfis[i].nome === "moderator") {
                    next();
                    return;
                }

                if (perfis[i].nome === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Moderator or Admin Role!"
            });
        });
    });
};

export const authJwt = {
    verifyToken,
    isAdmin,
    isModerator,
    isModeratorOrAdmin
};