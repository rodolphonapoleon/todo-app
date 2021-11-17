import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import FormInput from "./components/FormInput";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";
import logo from "./logotask.png";

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: (task) => !task.completed,
  COMPLETED: (task) => task.completed,
};

const bname = Object.keys(FILTER_MAP);

function App(props) {
  const [allTasks, setallTasks] = useState(props.tasks);

  const filters = [
    { filterName: bname[0], filterQuantity: `${allTasks.length}` },
    {
      filterName: bname[1],
      filterQuantity: `${allTasks.filter((task) => !task.completed).length}`,
    },
    {
      filterName: bname[2],
      filterQuantity: `${allTasks.filter((task) => task.completed).length}`,
    },
  ];

  const [filter, setFilter] = useState("ALL");

  function toggleCompleted(id) {
    const updatedTasks = allTasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setallTasks(updatedTasks);
  }

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
      key={button.filterName}
      filterName={button.filterName}
      filterQuantity={button.filterQuantity}
      setFilter={setFilter}
    />
  ));
  const taskList = allTasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
    ));
  return (
    <Container className="mt-5 Todo-body px-5">
      <Row className="justify-content-center">
        <Col md="8" className="text-center align-items-center mt-5 mb-4">
          {/* <div> */}
          <Image className="" src={logo} alt="" />
          <h4>Never Miss a Task</h4>
          {/* </div> */}
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
