import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function FormInput(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    props.addTask(name);
    setName("");
  }
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTask">
        <Form.Label>My Daily Task...Whoaaa </Form.Label>
        <Form.Control
          onChange={handleChange}
          size="lg"
          type="text"
          autoComplete="off"
          placeholder="Enter your task"
          value={name}
        />
      </Form.Group>
      <Button variant="flat" type="submit">
        Submit
      </Button>
    </Form>
  );
}
