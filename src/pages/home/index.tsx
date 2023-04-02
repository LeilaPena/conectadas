import { Layout } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"
import { useMe } from "../../hooks"
import { servicesPosts } from "../../services/posts"

const HomePage = () => {

    const {me} = useMe();

    const addPosts = (data: {title: string, detail: string }) => {
        const user = {id: me?.id, name: me?.name, lastname: me?.lastname}
        me && servicesPosts.add({title: data.title, detail: data.detail, date: new Date(), user})
    }


    return (
        <Layout>
            <FormPost onSubmit={addPosts}/>
        </Layout>
    )
}

export const Home = withAuth(HomePage)