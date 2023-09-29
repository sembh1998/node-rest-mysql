import express from 'express'
import userRoutes from '../routes/users'
import cors from 'cors'
import db from '../db/connection'

class Server {
  private readonly app
  private readonly port: string
  private readonly apiPaths = {
    users: '/api/users'
  }

  constructor () {
    this.app = express()
    this.port = process.env.PORT ?? '8000'

    // database connection
    void this.dbConnection()

    // middlewares
    this.middlewares()

    // define routes
    this.routes()
  }

  async dbConnection (): Promise<void> {
    try {
      await db.authenticate()
      console.log('Database connection established')
    } catch (err) {
      console.error(err)
    }
  }

  middlewares (): void {
    // CORS
    this.app.use(cors())

    // pars body
    this.app.use(express.json())

    // public folder
    this.app.use(express.static('public'))
  }

  routes (): void {
    this.app.use(this.apiPaths.users, userRoutes)
  }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export default Server
