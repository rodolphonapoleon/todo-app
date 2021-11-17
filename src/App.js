import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import FormInput from "./components/FormInput";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

const filters = [
  { filterName: "ALL", filterQuantity: "3" },
  { filterName: "ACTIVE", filterQuantity: "2" },
  { filterName: "COMPLETED", filterQuantity: "1" },
];

function App(props) {
  const [allTasks, setallTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = {
      id: "todo-" + nanoid(),
      name: name,
      completed: false,
    };
    setallTasks([...allTasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = allTasks.filter((task) => task.id !== id);
    setallTasks(remainingTasks);
  }

  const filterList = filters.map((button) => (
    <FilterButton
      filterName={button.filterName}
      filterQuantity={button.filterQuantity}
    />
  ));
  const taskList = allTasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
    />
  ));
  return (
    <Container className="mt-5">
      <Row className="justify-content-center Todo-body">
        <Col md="8" className="text-center my-5">
          <div>
            <h1>DayTask</h1>
            <h4>Never miss a task aaa</h4>
          </div>
          <hr />
        </Col>
        <Col md="8">
          <FormInput addTask={addTask} />
        </Col>
        <Col md="8" className="my-5 btn-group">
          {filterList}
        </Col>
        <Col md="8">
          <ListGroup className="mb-5">{taskList}</ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
