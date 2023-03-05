import { object, string} from "yup";
import { yupResolver } from '@hookform/resolvers/yup';



const loginSchema = object({
    email: string().email("Debe ingresar un email").required("Este campo es necesario"),
    pass: string().required("Este campo es necesario"),
})

export const validationSchema = yupResolver(loginSchema)