const Task = (taskTitle, taskDescription, taskDueDate, taskPriority = 1, taskDone = false) => {
  const title = taskTitle;
  const description = taskDescription;
  const dueDate = taskDueDate;
  const priority = taskPriority;
  const done = taskDone;

  return {
    title, description, dueDate, priority, done
  };
};

export default Task;
