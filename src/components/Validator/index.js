import React from "react";

const Validator = (props) => {
  let validatormsg = "";

  if (props.textLength <= 5) {
    validatormsg = "Text is too short";
  }

  if (props.textLength > 5) {
    validatormsg = "Text is long enough";
  }

  return <div>{validatormsg}</div>;
};

export default Validator;
