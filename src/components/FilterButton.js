import React from "react";
import { Button, Badge } from "react-bootstrap";

export default function FilterButton(props) {
  return (
    <Button variant="outline-primary">
      {props.filterName}{" "}
      <Badge variant="success" pill>
        {props.filterQuantity}
      </Badge>
    </Button>
  );
}
