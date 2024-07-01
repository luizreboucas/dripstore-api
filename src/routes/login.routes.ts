import express, {Express} from 'express'
import { AuthService } from '../services/auth.service';


var router = express.Router()

    
    .post('/',AuthService.signin )

export default router;