import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  // UiService basically subjects to an event in the UI of App. Ex: Toggling the UI components whenever needed
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // call this when we want to toggle
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // call this when we want to do something with the UI when the above func is toggled
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
