import { Layout, LoginForm } from "../../components"
import { withAuth } from "../../hoc"
import { useMe } from "../../hooks"

const LoginPage = () => {


    return (
            <Layout>
                <LoginForm />
            </Layout>
    )
}

export const Login = withAuth(LoginPage)