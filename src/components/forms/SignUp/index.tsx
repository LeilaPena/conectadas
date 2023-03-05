import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { signUpType } from "../../../types";
import "./style.scss";
import {defaultValues} from "./defaultValues"
import { validationSchema } from "./validationSchema";

const SignUpForm = () => {
  const { register, handleSubmit, formState } = useForm<signUpType>({defaultValues, resolver: validationSchema});

  const onSubmit = (data: signUpType) => {
    servicesUser.add({...data, birthdate: new Date (data.birthdate)});
  };

  return (
    <div className="container-fluid contenedor d-flex justify-content-center align-items-center">
      <div className="cardForm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-wrap">
          <Form.Group className="m-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("name")}
              className="inputSignUp"
            />
            {formState.errors.name && (<Form.Text className="text-danger">{formState.errors.name?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu apellido"
              {...register("lastname")}
              className="inputSignUp"
            />
            {formState.errors.lastname && (<Form.Text className="text-danger">{formState.errors.lastname?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresá tu email"
              {...register("email")}
              className="inputSignUp"
            />
            {formState.errors.email && (<Form.Text className="text-danger">{formState.errors.email?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá tu contraseña"
              {...register("pass")}
              className="inputSignUp"
            />
            {formState.errors.pass && (<Form.Text className="text-danger">{formState.errors.pass?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicBirthdate">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresá tu fecha de nacimiento"
              {...register("birthdate")}
              className="inputSignUp"
            />
            {formState.errors.birthdate && (<Form.Text className="text-danger">{formState.errors.birthdate?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicCountry">
            <Form.Label>Pais</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu país"
              {...register("country")}
              className="inputSignUp"
            />
            {formState.errors.country && (<Form.Text className="text-danger">{formState.errors.country?.message}</Form.Text>)}
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu ciudad"
              {...register("city")}
              className="inputSignUp"
            />
            {formState.errors.city && (<Form.Text className="text-danger">{formState.errors.city?.message}</Form.Text>)}
          </Form.Group>
        </div>

        <Button variant="primary" type="submit" className="m-3">
          Crear cuenta
        </Button>
      </Form>
      </div>
    </div>
  );
};

export { SignUpForm };
