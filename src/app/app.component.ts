import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-do-List';
  allTasks: any = [];
  newTask: any;
  date = new Date(Date.now());
  addNewTaskone = false;
  addNewTask = true;
  todos: any = [];

  constructor() {
    setTimeout(()=>this.addNewTaskone=true, 10000);
   }

  onAdd() {
    this.addNewTaskone = !this.addNewTaskone;
    console.log('add new task', this.addNewTaskone);
  }

  submitTask() {
    this.addNewTaskone = !this.addNewTaskone;
    this.allTasks.push(this.newTask);
    console.log('Enter new task', this.addNewTaskone);
    this.newTask = '';

  }
  onClose(){
    this.addNewTaskone = false;
  }
  
}
