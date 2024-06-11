import express from 'express';
import userRoutes from './users.routes'
import perfilRoutes from './perfis.routes'
import produtosRoutes from './produtos.routes'

export const routes = (app) => {
    app.use('/api/users', userRoutes)
    app.use('/api/perfil', perfilRoutes)
    app.use('/api/produtos', produtosRoutes)
}

export default routes;