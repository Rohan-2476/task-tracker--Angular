import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title!: string;
  reminder: boolean = false;
  day!: string;
  completeDate!: Date;

  constructor() {
    this.completeDate = new Date();
    this.day = this.completeDate.toLocaleDateString();
  }

  ngOnInit(): void {}

  // submitting the add task form
  onSubmit() {
    if (!this.title) {
      alert('Please add a Title to the task!');
    }
    if (!this.day) {
      alert('Please add Day & Time to the task!');
    }

    const newTask = {
      title: this.title,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask); // pass the newTask created to the event that has been emitted to parent component

    this.title = '';
    this.day = '';
    this.reminder = false;
  }
}
