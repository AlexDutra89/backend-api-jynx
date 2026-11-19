//  controllers coordenam pedidos / leva e traz pedidos

import usersRepository from "../Repositories/usersRepository.js";
import bcrypt from "bcrypt"

const usersController = {
    async get (){
        return await usersRepository.get()
    },
    async post (req){
        const {name, age, email, password} = req.body

        let saltRound = 10

        let passcrypt = await bcrypt.hash(password, saltRound)


        return await usersRepository.post(name, age, email, passcrypt)
    },
    async put(req){
        const {id, name, age, email, password} = req.body

        let saltRound = 10

        let passcrypt = await bcrypt.hash(password, saltRound)

        return await usersRepository.put(id,name, age, email, passcrypt)
    
    },
    async delete(req){
        const {id} = req.body
        return await usersRepository.delete(id)
    },
}

export default usersController