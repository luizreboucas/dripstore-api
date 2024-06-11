import express, { Request, Response } from 'express';
import sequelize from './src/infra/db/config';
import routes from './src/routes/index.routes';

const test = async() => {
    try {
        await sequelize.authenticate();
        console.log("banco de dados conectado com sucesso")
    } catch (error) {
        console.log("erro na conexão com banco de dados", error)
    }
}

test();
const app = express();
app.use(express.json())
routes(app);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("server running in port " + PORT);
})
app.get("/", (req: Request, res: Response) => {
    res.json({message: "servidor funcionando ok"})
})
