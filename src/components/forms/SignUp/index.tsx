import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { signUpType } from "../../../types";

const SignUpForm = () => {

  const { register, handleSubmit } = useForm<signUpType>()

  const onSubmit = (data: signUpType) => {

    servicesUser.add(data)

  }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" {...register("name")}/>
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" {...register("lastname")}/>
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" {...register ("email")}/>
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" {...register("password")}/>
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Ingresa tu fecha de nacimiento" {...register("birthdate")}/>
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Form>
  );
};

export { SignUpForm };
