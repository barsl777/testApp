import React, { useState } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Button } from "react-bootstrap";

const AddTodo = (props) => {
  const [value, setValue] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const handleAddTodo = () => {
    value && value.length <= maxLength && props.addTodo(value);
    setValue("");
  };

  return (
    <div className="todo-block">
      <div>
        Max Length Todo:
        <input
          className='inputMaxLength'
          onChange={e => setMaxLength(e.target.value)}
          value={maxLength}
        />
      </div>
      <div>
        Todo:
        <input
          className='inputTodo'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <Button className="add-todo btn btn-dark btn-sm" type="button" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default connect(
  null,
  { addTodo }
)(AddTodo);