import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";

const List = (props) => {
  const [taskName, setTaskName] = useState("");
  const { list } = props;

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTask(list.list_id, taskName);
  };
console.log('list:', list);
console.log('list Tasks:', list.tasks);
console.log('list Names:', list.list_name);
  return (
    <div>
        {console.log('made to first div')}
        
      <h3> {list.list_name} </h3>
      {console.log('made to second div')}
      {console.log('inside list', list)}
      {console.log('inside tasks',list.tasks)}
      {list.tasks.map((task, idx) => {
          console.log('mapper');
        return <h3 key={idx}> {task.task_name} </h3>;
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
