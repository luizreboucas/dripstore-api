import express, {Express} from 'express'
import ProdutosService from "../services/produtos.service";

export const produtoRoute = (app: Express) => {
    var route = express.Router()

    route.get('/', ProdutosService.getAll)

    app.use('/api/produto', route)
}