import React from "react";
import Typography from "@material-ui/core/Typography";

const Validator = (props) => {
  let validatormsg = "";
  let validatorColor = "green";

  if (props.textLength <= 5) {
    validatormsg = "Text is too short";
    validatorColor = "red";
  }

  if (props.textLength > 5) {
    validatormsg = "Text is long enough";
    validatorColor = "green";
  }

  return (
    <div>
      <Typography
        color="textSecondary"
        style={{ color: validatorColor }}
        gutterBottom
      >
        {validatormsg}
      </Typography>
    </div>
  );
};

export default Validator;
