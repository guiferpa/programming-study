import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import "../styles/task-item.css";

export default function TaskItem({ children, checkTask, taskState }) {
  return (
    <div class="task-item-container">
      {taskState ?
        <MdOutlineCheckBox onClick={checkTask} /> :
        <MdCheckBoxOutlineBlank onClick={checkTask} />
      }
      <li class={taskState ? "task-item-checked" : "task-item"}>{children}</li>
    </div>
  )
}
