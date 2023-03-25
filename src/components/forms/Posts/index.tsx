import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PostFormType } from "../../../types";

const FormPost = () => {
  
  const { register, handleSubmit } = useForm<PostFormType>();

  const onSubmit = (data: postFormType) => {
    
    console.log(data)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="m-3" controlId="formPost">
        <Form.Label>¿Qué te gustaría compartirnos?</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá el título de tu publicación"
          {...register("title")}
        />
      </Form.Group>
      <Form.Control as="textarea" {...register("detail ")} />
      <Button variant="primary" type="submit" className="m-3">
        Publicar
      </Button>
    </Form>
  );
};

export { FormPost };
