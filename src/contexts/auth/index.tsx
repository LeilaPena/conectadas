import { createContext, useState, Dispatch, SetStateAction, ReactNode, FC} from "react";
import { User } from "../../types";

type Context = {
    me?: Partial<User> | null;
    setMe: Dispatch<SetStateAction<Partial<User> | undefined | null>>
}

const AuthContext = createContext<Context>({
    me: {}, 
    setMe: () => undefined,
})

type Provider = {
    children: ReactNode;
}

const AuthProvider: FC<Provider> = ({children}) => {

    const [me, setMe] = useState<Partial<User> | null>()

    return(
        <AuthContext.Provider value={{me, setMe}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext, AuthProvider}