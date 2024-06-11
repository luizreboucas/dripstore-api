import express, {Express} from 'express'
import PerfilService from '../services/perfis.service';


var router = express.Router()

    .get('/', PerfilService.getAll)
    .post('/',PerfilService.create)
    .get('/:id',PerfilService.findOne)
    .put('/:id', PerfilService.update)
    .delete('/:id', PerfilService.delete)

export default router;