import { Sequelize } from 'sequelize'

const db = new Sequelize(
  process.env.MYSQL_DATABASE ?? 'devdb',
  process.env.MYSQL_USER ?? 'devuser',
  process.env.MYSQL_PASSWORD ?? 'devpass',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: Number(process.env.MYSQL_PORT ?? 3308),
    logging: true
  }
)

export default db
