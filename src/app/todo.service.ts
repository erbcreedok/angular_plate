import { EventEmitter } from '@angular/core'
import { TaskModel } from '../models/task.model'

export class TodoService {
  private tasks: TaskModel[] = [
    new TaskModel('First task'),
    new TaskModel('Second Task')
  ]
  tasksChanged = new EventEmitter<TaskModel[]>()

  getTasks() {
    return [...this.tasks]
  }

  addNewTask(task: TaskModel) {
    this.tasks.push(task)

    this.tasksChanged.emit(this.getTasks())
  }

  removeTask(task: TaskModel) {
    this.tasks = this.tasks
      .filter(t => t.created !== task.created)

    this.tasksChanged.emit(this.getTasks())
  }

}
