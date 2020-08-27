import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import * as actions from "../../actions";



function InputForm({searchStart}: any) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    searchStart()
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter company name"
          aria-label="Enter company name"
          aria-describedby="basic-addon2"
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

const mapDispatchToProps = (dispatch: any) => {
  const { searchStart } = bindActionCreators(actions, dispatch);
  return {
    searchStart,
  };
};

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
