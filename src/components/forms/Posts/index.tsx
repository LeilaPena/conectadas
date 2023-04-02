import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { servicesPosts } from "../../../services/posts";
import { postFormType } from "../../../types";
import { defaultValues } from "./defaultValues"
import { validationSchema } from "./validationSchema";

type Props =  {
  onSubmit: (data: {title: string, detail: string }) => void;
}

const FormPost: FC<Props> = ({onSubmit}) => {

  const { register, handleSubmit, formState } = useForm<{ title: string, detail: string }>({
    defaultValues,
    resolver: validationSchema
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="m-3" controlId="formPost">
        <Form.Label>¿Qué te gustaría compartirnos?</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá el título de tu publicación"
          {...register('title')}
        />
        {formState.errors.title && (<Form.Text className="text-danger">{formState.errors.title?.message}</Form.Text>)}
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" {...register('detail')} />
        {formState.errors.detail && (<Form.Text className="text-danger">{formState.errors.detail?.message}</Form.Text>)}
      </Form.Group>

      <Button variant="primary" type="submit" className="m-3">
        Publicar
      </Button>
    </Form>
  );
};

export { FormPost };
