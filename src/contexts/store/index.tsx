import { createContext, FC, ReactNode, useState } from "react";
import { Post } from "../../types" 

type ContextType = {
    posts: Post[],
    loadPosts: (posts: Post[]) => void
}

const StoreContext = createContext<ContextType>({
    posts: [],
    loadPosts: (posts: Post[]) => undefined
})

type Props = {
    children: ReactNode
}

const StoreProvider: FC <Props> = ({ children } ) => {

    const [posts, setPosts] = useState<Post[]>([])

    const loadPosts = (posts: Post[]) => {
        setPosts(posts)
    }

    return (
         <StoreContext.Provider value={{ posts, loadPosts }}> 
             {children}
         </StoreContext.Provider>
    )

}

export {StoreContext, StoreProvider}