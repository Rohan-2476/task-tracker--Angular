import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/Task';
import { faTimes, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  markedDone: boolean = false;
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faCheck = faCheck;
  faEdit = faEdit;

  constructor(private taskService: TaskService) {}

  // Deleting a task
  onDelete(task: Task) {
    this.onDeleteTask.emit(task); // passed the task from child to parent by emitting the event
  }

  onMarkedDone(task: Task) {
    this.markedDone = !this.markedDone;
    console.log(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onEditTask(task: Task) {
    this.taskService.editTask(task).subscribe();
    console.log(task);
  }
}
