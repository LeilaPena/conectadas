import { Button, Form } from "react-bootstrap";

const FormPost = () => {
  return (
    <Form>
    <Form.Group className="m-3" controlId="formPost">
      <Form.Label>¿Qué te gustaría compartirnos?</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ingresá el título de tu publicación"
      />
        </Form.Group>
      <Form.Control as="textarea" />
      <Button variant="primary" type="submit" className="m-3">
          Publicar
        </Button>
    </Form>
  );
};

export { FormPost };
