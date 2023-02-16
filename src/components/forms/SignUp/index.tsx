import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { servicesUser } from "../../../services/users";

const SignUpForm = () => {

  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" />
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
          <Form.Text className="text-danger">
            Los datos son incorrectos
          </Form.Text>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Ingresa tu fecha de nacimiento" />
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
