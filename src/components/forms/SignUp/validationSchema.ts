import { object, string} from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationMsgs } from "../validationsMsgs";

const loginSchema = object({
    name: string().required(validationMsgs.required),
    lastname: string().required(validationMsgs.required),
    email: string().email(validationMsgs.email).required(validationMsgs.required),
    birthdate: string().required(validationMsgs.required),
    country: string().required(validationMsgs.required),
    city: string().required(validationMsgs.required), 
    pass: string().required(validationMsgs.required).matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, {message: validationMsgs.pass} ),
})

export const validationSchema = yupResolver(loginSchema)