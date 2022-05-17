import { Component } from '@angular/core';
import { TaskModel } from '../models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskText: string = '';
  tasks: TaskModel[] = [ new TaskModel('First task'), new TaskModel('Second Task')]

  onFormSubmit() {
    this.tasks.push(
      new TaskModel(this.taskText)
    )
    this.taskText = ''
  }
}
