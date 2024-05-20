import express, {Express} from 'express'
import ProdutosService from "../services/produtos.service";

export const produtoRoute = (app: Express) => {
    var route = express.Router()

    route.get('/', ProdutosService.getAll)
    route.post('/',ProdutosService.create)
    route.get('/:id',ProdutosService.findOne)
    route.put('/:id', ProdutosService.update)
    route.delete('/:id', ProdutosService.delete)
    app.use('/api/produto', route)
}