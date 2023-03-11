import { FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

type Props = {
    onSearch: (text: string) => void
}

const FormMovies: FC <Props> = ({ onSearch }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    onSearch(text)
  }, [text])

  return (
    <Form.Group className="m-3" controlId="formSearch">
      <Form.Control
        type="text"
        placeholder="Ingresá la peli"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Form.Group>
  );
};

export { FormMovies };
