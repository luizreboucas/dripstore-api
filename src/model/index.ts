import Perfil from "./Perfil";
import Produto from "./Produto";
import User from "./User";

type DbSingleton = {
    produto: typeof Produto,
    user: typeof User,
    perfil: typeof Perfil;
}

const db : DbSingleton= {
    produto: Produto,
    user: User,
    perfil: Perfil
};


export default db;