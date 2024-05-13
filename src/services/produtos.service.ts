import { Request, Response } from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import Produto from "../model/User"

export default class ProdutosService{
    
    static getAll = async(req: Request, res: Response) => {
        try {
            const produtos = await Produto.findAll();
            return res.json(produtos)
            
        } catch (error) {
            console.log(error)
        }
    }

}