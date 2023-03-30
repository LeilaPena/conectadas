import { Layout, Post } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"
import { usePosts } from "../../hooks"

import { Container } from "react-bootstrap"

const HomePage = () => {

    const { posts, addPosts } = usePosts()

    return (
        <Layout>
            <Container fluid>
            <FormPost onSubmit={addPosts}/>
            
            {
                posts.map(post => (
                    <div className="m-4" key={post.id}>
                        <Post title={post.title} date={post.date} detail={post.detail} user={post.user} id={post.id}/>
                    </div>
                ))
            }
            </ Container>

        </Layout>
    )
}

export const Home = withAuth(HomePage)