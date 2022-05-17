export class TaskModel {
  text: string;
  created: Date;
  done?: boolean;

  constructor(text: string) {
    this.text = text
    this.created = new Date()
    this.done = false
  }
}
