import React from "react";
import { Button, Badge } from "react-bootstrap";

export default function FilterButton(props) {
  return (
    <Button
      variant="outline-flat"
      onClick={() => props.setFilter(props.filterName)}
    >
      {props.filterName}{" "}
      <Badge bg="secondary" pill>
        {props.filterQuantity}
      </Badge>
    </Button>
  );
}
