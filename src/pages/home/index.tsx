import { Layout } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"

const HomePage = () => {
    return (
        <Layout>
            <FormPost />
        </Layout>
    )
}

export const Home = withAuth(HomePage)