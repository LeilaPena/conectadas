import { Layout } from "../../components"
import { withAuth } from "../../hoc"
import { useMe } from "../../hooks"

const LoginPage = () => {


    return (
            <Layout>
                Login
            </Layout>
    )
}

export const Login = withAuth(LoginPage)