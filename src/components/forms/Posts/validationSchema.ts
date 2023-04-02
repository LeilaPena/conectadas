import { object, string} from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationMsgs } from "../validationsMsgs";


const loginSchema = object({
    title: string().required(validationMsgs.required),
    detail: string().required(validationMsgs.required),
})

export const validationSchema = yupResolver(loginSchema)