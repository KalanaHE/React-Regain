import React from "react";
import { TextField, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Validator from "../Validator";

const Index = (props) => {
  return (
    <div>
      <Card
        bgcolor="warning.main"
        variant="outlined"
        // style={{ margin: "0 100px" }}
      >
        <CardContent>
          <br />
          {props.name ? (
            <Button variant="contained" color="secondary">
              {props.name}
            </Button>
          ) : null}
          <br />
          <br />
          <Button variant="contained" color="primary">
            {props.index}
          </Button>
          <br />
          <br />
          <br /> <br />
          <TextField
            id={props.name}
            onChange={props.namechange}
            label="Enter your name here"
            variant="outlined"
            value={props.name}
          />
          <Validator textLength={props.name.length} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
