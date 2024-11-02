import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import CreateTaskButton from "../components/create-task-button";
import DescribeTask from "../components/describe-task";
import SaveTaskButton from "../components/save-task-button";
import TaskItem from "../components/task-item";
import TaskList from "../components/task-list";

const IDLE_MODE = "idle";
const CREATE_TASK_MODE = "create-task";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(IDLE_MODE);
  const [tempTask, setTempTask] = useState("");

  const createNewTask = (description) => {
    return {
      description,
      isChecked: false,
      id: uuidv4(),
    }
  }

  const checkTask = (task) => {
    const taskEdited = tasks.find(item => item.id === task.id)
    taskEdited.isChecked = !taskEdited.isChecked;
    setTasks([...tasks])
  }

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
            setTasks([...tasks, createNewTask(tempTask)]);
            setTempTask("");
          }}
        />
      )}
      <TaskList>
        {tasks.map((task) => {
          return <TaskItem onCheckTask={() => checkTask(task)} task={task}>{task.description}</TaskItem>;
        })}
      </TaskList>
    </div>
  );
}
