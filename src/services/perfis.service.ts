import { Request, Response } from "express"
import db from "../model";
const Perfil = db.perfil;

export default class UserService{
    
    static getAll = async(req: Request, res: Response) => {
        try {
            const perfis = await Perfil.findAll();
            return res.json(perfis)
            
        } catch (error) {
            console.log(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const { nome, codigo }= req.body
            const data_cadastro = new Date();
            const perfil = {
                nome,
                codigo,
                data_cadastro
            }
            const result = await Perfil.create(perfil);
            return res.json(result);
        } catch (error) {
            console.log(error)
        }
    }

    static findOne = async(req:Request, res: Response) => {
        try {
            const { id } = req.params;
            const result = await Perfil.findByPk(id);
            return res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            await Perfil.destroy({
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
            const { nome, codigo} = req.body
            if(nome) await Perfil.update({nome}, { where: {id}})
            if(codigo) await Perfil.update({codigo}, { where: {id}})
            const perfil = await Perfil.findByPk(id);
            return res.status(201).json({perfil});

        } catch (error) {
            console.log(error)
        }
    }
}