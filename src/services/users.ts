import { User } from "../types"
import { apiFirebase } from "../utils/axios"

const add = async (user: User) => {
   
    const response = await apiFirebase.post('/users.json', user)
    
    return response.data
}

const getAll = async () => {
    const response = await apiFirebase.get('/users.json')

    return response.data
}

export const servicesUser = { add, getAll }