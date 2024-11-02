import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import "../styles/check-task-button.css";

export default function CheckTaskButton({onCheckTask, task}) {
   return (
    <button class="check-task-button">
        {task.isChecked ?
        <MdOutlineCheckBox onClick={onCheckTask} /> :
        <MdCheckBoxOutlineBlank onClick={onCheckTask} />
      } 
    </button>
   ) 
}