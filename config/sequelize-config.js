import Sequelize from "sequelize"

const connection = new Sequelize({
dialect: 'mysql',
host: 'localhost',
username: 'root',
password: '',
// Comente essa linha na primeira execução da aplicação
database: 'ardenciaExpress',
timezone: "-03:00"
})
export default connection
