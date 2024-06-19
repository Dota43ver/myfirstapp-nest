import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/tasks')
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/tasks/:id')
  getTask(@Param('id') id: string) {
    const taskfound = this.tasksService.getTask(parseInt(id));
    if (!taskfound) {
      return 'No hay tareas';
    }
    return taskfound;
  }

  @Post('/tasks')
  createTasks(@Body() task: any) {
    this.tasksService.createTask(task);
  }

  @Put('/tasks')
  updateTasks() {
    return 'actualizando tareas';
  }

  @Delete('/tasks')
  deleteTasks() {
    return 'eliminando tareas';
  }

  @Patch('/tasks')
  updateTasksStatus() {
    return '';
  }
}
