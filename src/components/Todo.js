import React from "react";
import { ListGroupItem, Row, Col, Form } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Todo(props) {
  return (
    <ListGroupItem>
      <Row className="pe-3">
        <Col xs="11">
          <Form.Check
            type="checkbox"
            label={props.name}
            defaultChecked={props.completed}
            onChange={() => props.toggleCompleted(props.id)}
          ></Form.Check>
        </Col>
        <Col xs="1">
          <TrashFill
            type="button"
            color="#067ead"
            size={20}
            onClick={() => props.deleteTask(props.id)}
          />
        </Col>
      </Row>
    </ListGroupItem>
  );
}
