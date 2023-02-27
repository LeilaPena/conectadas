import { FC } from "react"

const publicRoutes = ["/login", "/signup"]

const withAuth = (Component: FC): FC => {

    const Authenticated = () => {

        

        return <Component />
    }

    return Authenticated

}

export { withAuth}