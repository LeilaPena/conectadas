import { object, string} from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationMsgs } from "../validationsMsgs";


const loginSchema = object({
    email: string().email(validationMsgs.email).required(validationMsgs.required),
    pass: string().required(validationMsgs.required),
})

export const validationSchema = yupResolver(loginSchema)