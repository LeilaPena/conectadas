import { mapToArray } from "../helpers/mapToArray"
import { signUpType, User } from "../types"
import { apiFirebase } from "../utils/axios"

const add = async (user: signUpType) => {
   
    const response = await apiFirebase.post('/users.json', user)
    
    return response.data
}

const getAll = async (): Promise<User[]> => {
    const response = await apiFirebase.get('/users.json')

    return mapToArray(response.data);
}

const getBy = async (value: string, type:"email" | "sessionToken") => {

    const users = await getAll()

    const user = users.find(user => user[type] === value)

    return user

}

const update = ({id, ...rest}: Partial<User>) => {

    const response = apiFirebase.patch(`/users/${id}.json`, {...rest})

};

export const servicesUser = { add, getAll, update, getBy}