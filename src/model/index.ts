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

db.perfil.belongsToMany(db.user, {
    through: "usuario_perfil"
  });
  db.user.belongsToMany(db.perfil, {
    through: "usuario_perfil"
  });


export default db;