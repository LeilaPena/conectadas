import { useContext } from "react"
import { AuthContext } from "../../contexts"
import { tokenGenerator } from "../../helpers/tokenGenerator"
import { servicesUser } from "../../services/users"
import {LoginFormType, signUpType, User} from "../../types"

const useMe = () => {

    const {me, setMe} = useContext(AuthContext)

    const login = async ({email, pass}: LoginFormType) => {

        const user = await servicesUser.getBy(email, "email");

        if (user && user.password === pass) {
            const {id, name, lastname} = user
            
            const token = tokenGenerator()
            
            servicesUser.update({sessionToken: token, id})

            localStorage.setItem('token', token)
        
            setMe({id, name, lastname, email})

        } else {
            setMe(null);
            console.log('login incorrecto')
        }
     }

    const signup = (user: signUpType) => {


    }

    const loginWithToken = async () => {
        const token = localStorage.getItem('token')

        if(token && !me){
            const user = await servicesUser.getBy(token, "sessionToken");
            
            if (user) {
                setMe({id: user.id, name: user.name, lastname: user.lastname, email: user.email})
            }
            else{
                setMe(null);
            }
        } else{
            setMe(null)
        }
    };

    const logout = async () => {
        await servicesUser.update({id: me?.id, sessionToken: null});
        setMe(null);
    };

    return {me, login, signup, loginWithToken, logout};

}

export {useMe};