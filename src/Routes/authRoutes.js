import authController from "../Controllers/authController.js"


export default function authRoutes(fatsify){

    fastify.post("/login", async (req) => {
        return await authController.validaLogin(req)
    })
}