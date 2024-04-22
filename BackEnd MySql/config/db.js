import { Sequelize } from "sequelize";

const BD = new Sequelize('citasbd', 'root', '1012403494', {
    host: 'localhost',
    dialect: 'mysql'
});

export default BD;