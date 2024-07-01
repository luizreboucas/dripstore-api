import { Request, Response } from "express";
import db from "../model";
import { compareHash } from "../helpers/criptografia";
import jwt from 'jsonwebtoken';
import { load } from 'ts-dotenv'
const User = db.user;
const secret= '@$*(@#*$%UI$F34';

export class AuthService{

    public static async signin(req:Request, res: Response){
        const { email, senha } = req.body;
        const userFromDb = await User.findOne({
            where: {
                email
            }
        })
        if(!userFromDb) res.status(404).json({message: "usuário não encontrado"});
        try {
            const senhaCorreta =  compareHash(senha, userFromDb?.dataValues.senha);
            if(!senhaCorreta){
                res.status(401).json({message: "o email ou a senha não estão corretos"})
            }
        } catch (error) {
            console.error('erro aqui => ', error)
        }
       
        const token = jwt.sign(userFromDb?.dataValues, secret);
       
        res.status(200).json({token});
    }
}