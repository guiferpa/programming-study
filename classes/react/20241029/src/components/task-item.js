import "../styles/task-item.css";
import CheckTaskButton from "./check-task-button";

export default function TaskItem({ children, task, onCheckTask }) {
  return (
    <div class="task-item-container">
      <CheckTaskButton onCheckTask={onCheckTask} task={task}/>
      <li class={task.isChecked === true ? "task-item-checked" : "task-item"}>{children}</li>
    </div>
  )
}
