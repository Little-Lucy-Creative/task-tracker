import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";

const List = (props) => {
  const [taskName, setTaskName] = useState("");
  const { list } = props;

  const handleChange = (e) => {
    setTaskName(e.target.value);
    console.log(taskName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(list.list_id);
    console.log(taskName);
    props.addTask(list.list_id, taskName);
    //   store.dispatch(addTask())
  };
console.log(list);
  return (
    <div>
      <h3> {list.list_name} </h3>
      {list.tasks.map((task) => {
        return <h3 key={task.task_id}> {task.task_name} </h3>;
      })}
      <div>
        <form onSubmit={onSubmit}>
          <label>
            Title
            <input
              value={taskName}
              onChange={handleChange}
              name="taskName"
              type="text"
            />
          </label>
          <button type="submit"> Add TaDa! </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addTask })(List);
