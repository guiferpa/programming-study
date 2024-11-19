import CheckTaskButton from "./check-task-button";

function UncheckedTaskItem({ children }) {
  return <span>{children}</span>;
}

function CheckedTaskItem({ children }) {
  return <s>{children}</s>;
}

export default function TaskItem({ children, onCheck, ...props }) {
  return (
    <li>
      <div>
        {props.isChecked ? (
          <CheckedTaskItem>{children}</CheckedTaskItem>
        ) : (
          <UncheckedTaskItem>{children}</UncheckedTaskItem>
        )}
        {!props.isChecked && <CheckTaskButton onClick={() => onCheck()} />}
      </div>
    </li>
  );
}
