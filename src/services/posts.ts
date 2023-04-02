import { postFormType } from "../types";
import { apiFirebase } from "../utils/axios";

const add = async (post: postFormType) => {

    const response = await apiFirebase.post('/posts.json', post)

    return response.data

}

export const servicesPosts = {add}