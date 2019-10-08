import Controller from '../controller';
import Model from '../model';
import tasksTemplate from '../hbs/tasks.hbs';
import taskEditTemplate from '../hbs/editTask.hbs';

const TasksView = (() => {
  const update = (tasks) => {
    const tasksElement = document.querySelector('.tasks');
    tasksElement.innerHTML = tasksTemplate({ tasks });

    const deleteButtons = document.querySelectorAll('.task-delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        Controller.removeTask(event.target.parentElement.id);
        Model.removeTaskEvent.notify(Controller.getActiveProjectTasks());
      });
    });

    const taskDoneCheckboxes = document.querySelectorAll('.task-done');
    taskDoneCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        Controller.toggleDone(event.target.parentElement.id);
      });
    });

    const editButtons = document.querySelectorAll('.task-edit-button');
    editButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = Number(event.target.parentElement.id);
        const editTaskElement = document.querySelector('#edit-task');
        editTaskElement.innerHTML = taskEditTemplate({ ...tasks[index], index });
        const editTaskForm = document.querySelector('.edit-task-form');
        editTaskForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const i = Number(e.target.id);
          const title = e.target.querySelector('#title').value;
          const description = e.target.querySelector('#description').value;
          const dueDate = e.target.querySelector('#due-date').value;
          const priority = e.target.querySelector('#priority').value;
          const done = e.target.querySelector('#done').value;
          Controller.editTask(i, {
            title, description, dueDate, priority, done
          });
          Model.projectSelectEvent.notify(Controller.getActiveProjectTasks());
        });
      });
    });

    const taskForm = document.querySelector('#task-form');
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskTitle = document.querySelector('.task-title').value;
      const taskDesc = document.querySelector('.task-desc').value;
      const taskDue = document.querySelector('.task-due').value;
      Controller.addTask(taskTitle, taskDesc, taskDue);
      Model.addTaskEvent.notify(Controller.getActiveProjectTasks());
      Model.addProjectEvent.notify(Controller.getProjects());
    });
  };

  const init = (tasks) => {
    update(tasks);
  };

  return {
    init, update
  };
})();

export default TasksView;
