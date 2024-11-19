import { useState } from "react";

import CreateTaskButton from "../components/create-task-button";
import DescribeTask from "../components/describe-task";
import SaveTaskButton from "../components/save-task-button";
import TaskItem from "../components/task-item";
import TaskList from "../components/task-list";

import * as actions from "../actions";

const IDLE_MODE = "idle";
const CREATE_TASK_MODE = "create-task";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(IDLE_MODE);
  const [tempTask, setTempTask] = useState("");

  return (
    <div>
      <CreateTaskButton
        onClick={() => {
          setMode(CREATE_TASK_MODE);
        }}
      />
      {mode === CREATE_TASK_MODE && (
        <DescribeTask
          value={tempTask}
          onChange={(evt) => {
            setTempTask(evt.target.value);
          }}
        />
      )}
      {tempTask.length > 0 && (
        <SaveTaskButton
          onClick={() => {
            setTasks([...tasks, actions.task.create(tempTask)]);
            setTempTask("");
          }}
        />
      )}
      <TaskList>
        {tasks.map((task) => {
          return (
            <TaskItem
              isChecked={task.isChecked}
              onCheck={() => {
                setTasks(actions.task.check(task.id, tasks));
              }}
            >
              {task.name}
            </TaskItem>
          );
        })}
      </TaskList>
    </div>
  );
}
