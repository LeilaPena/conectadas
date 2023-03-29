import { FC } from "react"
import { Card } from "react-bootstrap"
import { Post as PostType } from "../../../types"

const Post: FC<PostType> = ({date, detail, id, title, user}) => {
    return (
        <Card key={id}>
            <Card.Header className="d-flex justify-content-between">
                <div>{user.name} {user.lastname}</div>
                <div>{date.toString()}</div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {detail}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export { Post }