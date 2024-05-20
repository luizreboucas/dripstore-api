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

    static update = async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { data_cadastro, ativo, descricao, desconto, preco ,categoria} = req.body
            if(data_cadastro) await Produto.update({data_cadastro}, { where: {id}})
            if(ativo != undefined) await Produto.update({ativo}, { where: {id}})
            if(descricao) await Produto.update({descricao}, { where: {id}})
            if(desconto) await Produto.update({desconto}, { where: {id}})
            if(preco) await Produto.update({preco}, { where: {id}})
            if(categoria) await Produto.update({categoria}, { where: {id}})
            const produto = await Produto.findByPk(id);
            return res.status(201).json({produto});

        } catch (error) {
            console.log(error)
        }
    }
}