import { useContext, useEffect } from "react"
import { StoreContext } from "../../contexts"
import { servicesUser } from "../../services/users"
import { useMe } from "../useMe"

const useUsers = () => {

    const {users, loadUsers} = useContext(StoreContext)
    const {me} = useMe()

    useEffect(() => {
        !users.length && getUsers()
    }, [users])


    const getUsers = async () => {
        const response = await servicesUser.getAll();
        loadUsers(response)
    }

    const addFriend = async (friendId: any) => {
        const friends = me?.friends || [];
        await servicesUser.update({friends: [...friends, friendId], id: me?.id});
        getUsers()
    }

    const deleteFriend = async (friendId: any) => {
        const friends = me?.friends
        const friendsFilter = friends?.filter(friend => friendId !== friend)
        await servicesUser.update({friends: friendsFilter, id: me?.id})
        getUsers()
    }

    
    return {users, addFriend, deleteFriend}
}

export {useUsers}