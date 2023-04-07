import { useContext, useEffect } from "react"
import { StoreContext } from "../../contexts"
import { servicesUser } from "../../services/users"
import { useMe } from "../useMe"

const useUsers = () => {

    const {users, loadUsers} = useContext(StoreContext)
    const {me} = useMe()

    useEffect(() => {
        !users.length && getUsers()
        console.log(me)
    }, [users])


    const getUsers = async () => {
        const response = await servicesUser.getAll();
        loadUsers(response)
    }

    const addFriend = async (friendId: any) => {
        const friends = me?.friends || [];
        console.log(me?.friends)
        await servicesUser.update({friends: [...friends, friendId], id: me?.id});
    }

    
    return {users, addFriend}
}

export {useUsers}