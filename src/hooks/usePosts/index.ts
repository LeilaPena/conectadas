import { useContext, useEffect } from "react"
import { StoreContext } from "../../contexts"
import { servicesPosts } from "../../services/posts"
import { useMe } from "../useMe"

const usePosts = () => {

    const { posts, loadPosts } = useContext(StoreContext)
    const { me } = useMe();

    useEffect(() => {
        !posts.length && getPosts();
        
        console.log(me)
    }, [posts])

    const getPosts = async () => {
        const response = await servicesPosts.getAll();
        loadPosts(response);
    }

    const addPosts = async (data: { title: string, detail: string }) => {
        const user = { id: me?.id, name: me?.name, lastname: me?.lastname }
        await servicesPosts.add({ title: data.title, detail: data.detail, date: new Date(), user })
        getPosts()
    }

    return { posts, addPosts }
}

export { usePosts }