import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { signUpType } from "../../../types";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<signUpType>();

  const onSubmit = (data: signUpType) => {
    servicesUser.add(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("name")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá tu apellido"
          {...register("lastname")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresá tu email"
          {...register("email")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresá tu contraseña"
          {...register("password")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control
          type="date"
          placeholder="Ingresá tu fecha de nacimiento"
          {...register("birthdate")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pais</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá tu país"
          {...register("country")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá tu ciudad"
          {...register("city")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
  );
};

export { SignUpForm };
