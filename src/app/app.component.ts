import { Component } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-do-List';
  allTasks: any = [];
  newTask: any;
  newTaskSelect=true;
  selectedTask=false;
  date = new Date(Date.now());
  addNewTaskone = false;
  // addNewTask = true;
  rotateAnimi=false;
  todos: any = [];
  selectIndex:any;
  //Dragable Variables
  onStart=false;
  indexValue:any;
  droppedData: string = '';

  constructor() {

  }
  // Go To Add New Task
  onAdd() {
    this.addNewTaskone = !this.addNewTaskone;
    console.log('add new task', this.addNewTaskone);
    this.newTask = '';
  }
 // Select Task
 onSelect(task, i){
  this.newTask=task;
  this.addNewTaskone=!this.addNewTaskone;
  this.newTaskSelect=false;
  console.log('idhiOkaKothaTask Value',this.newTaskSelect);
  
  console.log('task is',this.newTask);
  console.log('Clicked on Task',this.selectIndex);
  return this.selectIndex=i;
 }
// Edit Task
  submitTask(newTask) {
    if((this.selectIndex || this.selectIndex === 0 ) && !this.newTaskSelect ){
      this.allTasks[this.selectIndex]=newTask;
      console.log('All tasks array', this.allTasks[this.selectIndex]);
      console.log('idhiOkaKothaTask Value',this.newTaskSelect);
      }
    else if(this.newTaskSelect){
      this.allTasks.push(this.newTask);
    }
    this.newTask = '';
 
    this.rotateAnimi = true;
    setTimeout(() => {
      this.addNewTaskone = false;
      this.rotateAnimi = false;
    }, 300);
  }
 
  onClose() {
    this.rotateAnimi = true;
    console.log("animate", this.rotateAnimi);
    setTimeout(() => {
      this.addNewTaskone = false;
      this.rotateAnimi = false;
    }, 500);
  }

  // Drag Start
  dragStart(i){
    this.onStart=!this.onStart;
    this.indexValue=i;
    console.log('Drag started',this.onStart);
       
  }
// DRAG and Release
  dragEnd(i){
this.indexValue=i;
console.log('Index Value is',this.indexValue);
this.onStart=false;
console.log('onStart Value is',this.onStart);
return this.indexValue;
  }
// Drop and Delete
  onDrop({ dropData }: DropEvent<string>): void {
  console.log('Droped');
  this.allTasks.splice(this.indexValue, 1);
  this.onStart=false;
  }

}
