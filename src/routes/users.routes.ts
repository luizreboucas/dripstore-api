import express, {Express} from 'express'
import UserService from "../services/users.service"

export const UserRoute = (app: Express) => {
    var route = express.Router()

    route.get('/', UserService.getAll)
    route.post('/',UserService.create)
    route.get('/:id',UserService.findOne)
    route.put('/:id', UserService.update)
    route.delete('/:id', UserService.delete)
    app.use('/api/user', route)
}