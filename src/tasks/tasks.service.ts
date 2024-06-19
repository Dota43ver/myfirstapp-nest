import { Injectable, Query } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }
}
