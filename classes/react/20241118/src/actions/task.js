export function create(name) {
  return {
    id: `${new Date()}`,
    isChecked: false,
    name,
  };
}

export function check(id, tasks) {
  return tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isChecked: true };
    }
    return task;
  });
}
