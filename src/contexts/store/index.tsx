import { createContext, FC, ReactNode, useState } from "react";
import { Post, User } from "../../types" 

type ContextType = {
    posts: Post[],
    users: User[],
    loadPosts: (posts: Post[]) => void, 
    loadUsers: (users: User[]) => void, 
}

const StoreContext = createContext<ContextType>({
    posts: [],
    users: [],
    loadPosts: (posts: Post[]) => undefined,
    loadUsers: (users: User[]) => undefined
})

type Props = {
    children: ReactNode
}

const StoreProvider: FC <Props> = ({ children } ) => {

    const [posts, setPosts] = useState<Post[]>([])
    const [users, setUsers] = useState<User[]>([])

    const loadPosts = (posts: Post[]) => {
        setPosts(posts)
    }

    const loadUsers = (users: User[]) => {
        setUsers(users)
    }

    return (
         <StoreContext.Provider value={{ posts, loadPosts, users, loadUsers }}> 
             {children}
         </StoreContext.Provider>
    )

}

export {StoreContext, StoreProvider}