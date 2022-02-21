import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  @Output() addEventEmitter  = new EventEmitter();
  taskForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle : ["",[Validators.required]]
    })
  }

  onKeyPress($event:any):void{
     //console.log("event is ",$event);
     if (this.taskForm.valid){
       this.addEventEmitter.emit(this.taskForm.value);
       this.taskForm.patchValue({
         taskTitle:""
       })
       alert('Task entered');
     }
     else{
       alert('Enter the required field');
     }
  }

}
