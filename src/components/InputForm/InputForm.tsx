import React, { useState, SyntheticEvent, ChangeEvent } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import * as actions from "../../actions";

function InputForm({ searchStart }: any) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    searchStart(inputText);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter company name"
          aria-label="Enter company name"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { searchStart } = bindActionCreators(actions, dispatch);
  return {
    searchStart,
  };
};

export default connect(null, mapDispatchToProps)(InputForm);
