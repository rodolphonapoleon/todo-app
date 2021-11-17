import React from "react";
import { ListGroupItem, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Todo(props) {
  return (
    <ListGroupItem>
      <Row className="pe-3">
        <Col xs="9">
          <Form.Check
            type="checkbox"
            label={props.name}
            defaultChecked={props.completed}
            onChange={() => props.toggleCompleted(props.id)}
          ></Form.Check>
        </Col>
        <Col xs="3">
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
