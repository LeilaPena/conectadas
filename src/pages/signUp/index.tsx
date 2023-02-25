import { Layout, SignUpForm } from "../../components"
import { withAuth } from "../../hoc"


const SignUpPage = () => {
    return (
        <Layout>
            <SignUpForm />
        </Layout>
    )
}

export const SignUp = withAuth(SignUpPage)