//  server inicia a aplicação

// ESM
import Fastify from 'fastify'
import usersRoutes from './Routes/usersRoutes.js'
import authRoutes from './Routes/authRoutes.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(usersRoutes, { prefix: '/users'})
await fastify.register(authRoutes)

 fastify.get("/get", async () => {
        return "Servidor funcionando na porta 3001"
    })



// let users = [
//     {
//         nome: 'Alex', 
//         idade: 36
//     },
//     {
//         nome: 'Thalita', 
//         idade: 33
//     }
// ]

// fastify.get('/get', async (request, reply) => {
//   return { estatos: 'A nossa requisição get está funcionando' }
// })
// fastify.get('/users', async () => {
//   return users
// })

// fastify.post('/post', async (request, reply) => {
//     const novoUsuario = {
//         name: 'Day',
//         idade: 39
//     }
//     users.push(novoUsuario)
//   return {
//     message: "Usuario criado",
//     usuario: novoUsuario
//   }
// })

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3001, host:'0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()