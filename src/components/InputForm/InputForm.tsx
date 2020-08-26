import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";


export default function InputForm() {
    const handleSubmit = (event: any) => {
        event.preventDefault()
    console.log("1");
  };

  return (
    <Form onSubmit={(handleSubmit)}>
      <InputGroup className="mb-3" >
        <FormControl
          placeholder="Enter company name"
          aria-label="Enter company name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-secondary" >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}
