import { object, string} from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = object({
    name: string().required("Este campo es necesario"),
    lastname: string().required("Este campo es necesario"),
    email: string().email("Debe ingresar un email").required("Este campo es necesario"),
    birthdate: string().required("Este campo es necesario"),
    country: string().required("Este campo es necesario"),
    city: string().required("Este campo es necesario"), 
    pass: string().required("Este campo es necesario").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, {message: `La contraseña debe tener 8 caracteres, 
    uno especial, una mayuscula y un número`} ),
})

export const validationSchema = yupResolver(loginSchema)