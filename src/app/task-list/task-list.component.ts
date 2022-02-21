import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TaskStatus } from '../enum/enum';
import { task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks:any;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(task:task):void{
      if(task.status==TaskStatus.Active){
        task.status = TaskStatus.Done;
      }
      else{
        task.status = TaskStatus.Active;
      }
  }

  deleteTask(task:task){
    let index = this.tasks.findIndex((item: { [x: string]: Guid; }) => item['id']==task.id);
    this.tasks.splice(index,1);
  }

}
