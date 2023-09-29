import dotenv from 'dotenv'
import Server from './models/server'

// Configuración de dotenv
dotenv.config()

const server = new Server()

server.listen()
