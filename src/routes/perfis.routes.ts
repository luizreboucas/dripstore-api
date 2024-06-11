import express, {Express} from 'express'
import UserService from "../services/users.service"


var router = express.Router()

    .get('/', UserService.getAll)
    .post('/',UserService.create)
    .get('/:id',UserService.findOne)
    .put('/:id', UserService.update)
    .delete('/:id', UserService.delete)

export default router;