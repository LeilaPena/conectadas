import { Aside, Layout, Post } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"
import { usePosts } from "../../hooks"

import { Card, Container, ListGroup } from "react-bootstrap"

const HomePage = () => {

    const { posts, addPosts } = usePosts()

    return (
        <Layout>
            <Container fluid className="d-flex justify-content-around">
                <Aside>
                    <div className="mt-5">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>user 1 </ListGroup.Item>
                            <ListGroup.Item>user 2</ListGroup.Item>
                            <ListGroup.Item>user 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                    <div className="mt-5">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>user 1 </ListGroup.Item>
                            <ListGroup.Item>user 2</ListGroup.Item>
                            <ListGroup.Item>user 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                </Aside>
                <div>
                    <FormPost onSubmit={addPosts} />
                    {
                        posts.map(post => (
                            <div className="m-4" key={post.id}>
                                <Post title={post.title} date={post.date} detail={post.detail} user={post.user} id={post.id} />
                            </div>
                        ))
                    }
                </div>
            </ Container>
        </Layout>
    )
}

export const Home = withAuth(HomePage)