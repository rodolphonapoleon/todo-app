import React from "react";
import { ListGroupItem, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Todo(props) {
  return (
    <ListGroupItem>
      <Row className="px-1">
        <Col xs="10">
          <Form.Check
            type="checkbox"
            label={props.name}
            defaultChecked={props.completed}
            onChange={() => props.toggleCompleted(props.id)}
          ></Form.Check>
        </Col>
        <Col xs="2">
          <Button
            type="button"
            size="sm"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
}
