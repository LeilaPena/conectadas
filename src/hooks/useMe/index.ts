import { useEffect } from "react"
import { tokenGenerator } from "../../helpers/tokenGenerator"
import { servicesUser } from "../../services/users"
import {LoginFormType, signUpType} from "../../types"

const useMe = () => {

    useEffect(() => {
        loginWithToken()
    }, [])

    const login = async ({email, pass}: LoginFormType) => {

        const user = await servicesUser.getBy(email, "email")

        if (user?.password === pass) {
            
            const token = tokenGenerator()
            
            servicesUser.update({sessionToken: token, id: user.id})

            localStorage.setItem('token', token)
        

        } else {
            console.log('login incorrecto')
        }
     }

    const signup = (user: signUpType) => {


    }

    const loginWithToken = async () => {
        const token = localStorage.getItem('token')

        if(token){
            const user = await servicesUser.getBy(token, "sessionToken")
            console.log(user)
        }
       
    }

    const logout = () => {

    }

    return { login, signup, loginWithToken, logout};

}

export {useMe};