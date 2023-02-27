import {LoginFormType, signUpType} from "../../types"

const useMe = () => {

    const login = ({email, pass}: LoginFormType) => {

    }

    const signup = (user: signUpType) => {


    }

    const loginWithToken = () => {

    }

    const logout = () => {

    }

    return { login, signup, loginWithToken, logout};

}

export {useMe};