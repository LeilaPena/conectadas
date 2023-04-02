import { mapToArray } from "../helpers/mapToArray";
import { Post, postFormType } from "../types";
import { apiFirebase } from "../utils/axios";

const add = async (post: postFormType) => {

    const response = await apiFirebase.post('/posts.json', post)

    return response.data

}

const getAll = async () => {
    const response = await apiFirebase.get('posts.json')

    return mapToArray<Post>(response.data)
}

export const servicesPosts = {add, getAll}