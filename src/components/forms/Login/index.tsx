import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginFormType } from "../../../types";
import {defaultValues} from "./defaultValues"
import {validationSchema} from "./validationSchema"

const LoginForm = () => {

    const {register, handleSubmit, formState} = useForm<LoginFormType>({
     defaultValues, 
     resolver: validationSchema,
    });
    const { login } = useMe()


    const onSubmit = (data: LoginFormType) => {
        login(data)
    }

  return (
    <div className="container-fluid contenedor d-flex justify-content-center align-items-center">
      <div className="cardForm">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-wrap">
            <Form.Group className="m-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresá tu email"
                {...register("email")}
              />
              {formState.errors.email && (<Form.Text className="text-danger">{formState.errors.email?.message}</Form.Text>)}   
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresá tu contraseña"
                {...register("pass")}
              />
              {formState.errors.pass && (<Form.Text className="text-danger">{formState.errors.pass?.message}</Form.Text>)}
            </Form.Group>
          </div>

          <Button variant="primary" type="submit" className="m-3">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
};

export { LoginForm };
