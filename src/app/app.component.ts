import { Component, OnInit } from '@angular/core'
import { TaskModel } from '../models/task.model'
import { TodoService } from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {}
