import { Request, Response } from "express"
import Produto from "../model/Produto"

export default class ProdutosService{
    
    static getAll = async(req: Request, res: Response) => {
        try {
            const produtos = await Produto.findAll();
            return res.json(produtos)
            
        } catch (error) {
            console.log(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const { descricao, desconto, preco, ativo, categoria }= req.body
            const data_cadastro = new Date();
            const produto = {
                descricao,
                desconto,
                preco,
                ativo,
                categoria,
                data_cadastro
            }
            const result = await Produto.create(produto);
            return res.json(result);
        } catch (error) {
            console.log(error)
        }
    }

    static findOne = async(req:Request, res: Response) => {
        try {
            const { id } = req.params;
            const result = await Produto.findByPk(id);
            return res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    static delete = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            await Produto.destroy({
                where: {
                    id
                }
            })
            return res.json({message: "produto deletado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    }

}