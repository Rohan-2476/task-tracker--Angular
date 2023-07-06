import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service'; // file for dealing with all the http requests
import { Task } from '../../Task'; //  Task interface

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = []; //  sets the property to 'interface'->Task and assigns [dummy data]->TASKS

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // In order to use Observables, we must subscribe just like a promise('.then')
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    // In order to use Observables, we must subscribe just like a promise('.then')
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      // after delete task is done on the server, filter it out on the UI
      // 't' is the task that has been deleted, filter it from remaining tasks on UI
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    if ((task.title && task.day) || task.reminder) {
      this.taskService.addTask(task).subscribe((task) => this.tasks.push(task)); // add the task through the server and push it in the tasks array
    } else {
      alert('Please provide Task details!');
    }
  }
}
