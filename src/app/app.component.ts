import { Component } from '@angular/core';
import { task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todoapp';
  tasks!:task[];

  constructor(){
    this.tasks = [];
  }

  addEventEmitter($event:any){
    console.log('Data received is ',event);
    this.tasks.push(new task($event.taskTitle));
    console.log("Tasks are",this.tasks);
  }
}
