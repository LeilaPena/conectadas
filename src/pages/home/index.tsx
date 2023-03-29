import { Layout, Post } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"
import { useMe } from "../../hooks"
import { servicesPosts } from "../../services/posts"
import { useEffect, useState } from "react"
import { Post } from "../../types"

const HomePage = () => {

    const {me} = useMe();
    const [post, setPost] = useState<Post[]>([])

    const addPosts = (data: {title: string, detail: string }) => {
        const user = {id: me?.id, name: me?.name, lastname: me?.lastname}
        me && servicesPosts.add({title: data.title, detail: data.detail, date: new Date(), user})
    }

    useEffect(() => {
        servicesPosts.getAll().then(data => setPost(data))
    }, [])

    return (
        <Layout>
            <FormPost onSubmit={addPosts}/>
        </Layout>
    )
}

export const Home = withAuth(HomePage)