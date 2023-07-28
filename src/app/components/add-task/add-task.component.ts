import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
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
  isDone: boolean = false;
  day!: string;
  completeDate!: Date;

  // properties for toggling the UI based on 'Add' btn toggle event
  showAddTask!: boolean;
  subscription!: Subscription; // used to watch the change to the subject assigned in the UiService

  constructor(private uiService: UiService) {
    this.completeDate = new Date();
    this.day = this.completeDate.toLocaleDateString();

    // toggling the UI based on btn toggle event
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
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
      isDone: this.isDone,
    };

    this.onAddTask.emit(newTask); // pass the newTask created to the event that has been emitted to parent component

    this.title = '';
    this.day = '';
    this.reminder = false;
  }
}
