import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts"
import { tokenGenerator } from "../../helpers/tokenGenerator"
import { servicesUser } from "../../services/users"
import {LoginFormType, signUpType, User} from "../../types"

const useMe = () => {

    const {me, setMe} = useContext(AuthContext)

    useEffect(() => {
        loginWithToken()
    }, [])

    const login = async ({email, pass}: LoginFormType) => {

        const {id, name, lastname, password} = await servicesUser.getBy(email, "email") as User;

        if (password === pass) {
            
            const token = tokenGenerator()
            
            servicesUser.update({sessionToken: token, id})

            localStorage.setItem('token', token)
        
            setMe({id, name, lastname, email})

        } else {
            console.log('login incorrecto')
        }
     }

    const signup = (user: signUpType) => {


    }

    const loginWithToken = async () => {
        const token = localStorage.getItem('token')

        if(token){
            const {id, name, lastname, email} = await servicesUser.getBy(token, "sessionToken") as User
            setMe({id, name, lastname, email})
        }
    };

    const logout = () => {

    }

    return {me, login, signup, loginWithToken, logout};

}

export {useMe};