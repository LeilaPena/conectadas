import { Aside, Layout, Post } from "../../components"
import { withAuth } from "../../hoc"
import { FormPost } from "../../components"
import { useMe, usePosts, useUsers } from "../../hooks"
import { Card, Container, ListGroup } from "react-bootstrap"
import { Plus, Trash } from "react-bootstrap-icons"

const HomePage = () => {

    const { posts, addPosts } = usePosts()
    const {users, addFriend, deleteFriend} = useUsers()
    const {me} = useMe()

    return (
        <Layout>
            <Container fluid className="d-flex justify-content-around">
                <Aside>
                    <div className="mt-5">
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <Card.Header>Amigos agregados</Card.Header>
                                {users.filter((user: any) => me?.friends?.includes(user.id)).map(user => (
                                    <ListGroup.Item key={user.id}>{user.name} {user.lastname} <button onClick={() => deleteFriend(user.id)}><Trash size={20} /></button></ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <Card.Header>Usuarios</Card.Header>
                                {users.filter((user: any) => me?.id !== user.id && !me?.friends?.includes(user.id)).map(user => (
                                    <ListGroup.Item key={user.id}>{user.name} {user.lastname} <button onClick={() => addFriend(user.id)}><Plus size={20} /></button> </ListGroup.Item>
                                ))}
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