import express, {Express} from 'express';
import userRoutes from './users.routes'
import perfilRoutes from './perfis.routes'
import produtosRoutes from './produtos.routes'
import authRoutes from './login.routes';

export const routes = (app: Express) => {
    app.use('/api/users', userRoutes)
    app.use('/api/perfil', perfilRoutes)
    app.use('/api/produtos', produtosRoutes)
    app.use('/api/login', authRoutes)
}

export default routes;