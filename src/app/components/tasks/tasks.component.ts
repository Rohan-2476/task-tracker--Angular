import { Component } from '@angular/core';
import { Task } from '../../Task'; //  Task interface
import { TASKS } from '../../mock-tasks'; //  mock-tasks arr of obj [dummy data]

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = TASKS; //  sets the property to 'interface'->Task and assigns [dummy data]->TASKS
}
