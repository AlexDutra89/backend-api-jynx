//  routes definem rotas
import usersController from "../Controllers/usersController.js";

export default async function usersRoutes(fastify){//Isso aqui é uma função, então pode colocar tudo junto.
    fastify.get("/get", async () => {
        return await usersController.get()
    })

    fastify.post("/post", async (req) =>{
        return await usersController.post(req)
    })

    fastify.put("/put", async (req) =>{
        return await usersController.put(req)
    })
    fastify.delete("/delete", async (req) =>{
        return await usersController.delete(req)
    })
   
}
    

