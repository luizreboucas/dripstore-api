import { Request, Response } from "express"
import db from "../model";
const User = db.user;

export default class UserService{
    
    static getAll = async(req: Request, res: Response) => {
        try {
            const users = await User.findAll();
            return res.json(users)
            
        } catch (error) {
            console.log(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const { nome, email, senha }= req.body
            const data_cadastro = new Date();
            const user = {
                nome,
                email,
                senha,
                data_cadastro
            }
            const result = await User.create(user);
            return res.json(result);
        } catch (error) {
            console.log(error)
        }
    }

    static findOne = async(req:Request, res: Response) => {
        try {
            const { id } = req.params;
            const result = await User.findByPk(id);
            return res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            await User.destroy({
                where: {
                    id
                }
            })
            return res.json({message: "usuário deletado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    }

    static update = async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { nome, email, senha} = req.body
            if(nome) await User.update({nome}, { where: {id}})
            if(email) await User.update({email}, { where: {id}})
            if(senha) await User.update({senha}, { where: {id}})
            const user = await User.findByPk(id);
            return res.status(201).json({user});

        } catch (error) {
            console.log(error)
        }
    }
}