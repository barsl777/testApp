import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos, filterTodos }) => (
  <div>
    <ul className="todo-list">
      {filterTodos && filterTodos.length
        ? filterTodos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
        : "No todos!"}
    </ul>
    <div className="label">
      Completed tasks: <span>{todos.length ? todos.filter(e => e.completed).length : 0}</span>
    </div>
    <div className="label">
      Uncompleted tasks: <span>{todos.length ? todos.filter(e => !e.completed).length : 0}</span>
    </div>
  </div>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const filterTodos = getTodosByVisibilityFilter(state, visibilityFilter);
  const todos = Object.values(state.todos.byIds);
  return { todos, filterTodos };
};
export default connect(mapStateToProps)(TodoList);
