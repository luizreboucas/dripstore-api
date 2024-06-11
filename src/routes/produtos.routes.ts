import express, { Express } from 'express'
import ProdutosService from "../services/produtos.service";


var router = express.Router()
router
    .get('/', ProdutosService.getAll)
    .post('/', ProdutosService.create)
    .get('/:id', ProdutosService.findOne)
    .put('/:id', ProdutosService.update)
    .delete('/:id', ProdutosService.delete)

export default router;