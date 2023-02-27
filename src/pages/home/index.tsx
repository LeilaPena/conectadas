import { Layout } from "../../components"
import { withAuth } from "../../hoc"

const HomePage = () => {
    return (
        <Layout>
            Home
        </Layout>
    )
}

export const Home = withAuth(HomePage)