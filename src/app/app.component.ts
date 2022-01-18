import { Component } from '@angular/core';


export class task{
  taskID:number;
  title:string;
  description:string;
  datetime:string;
}
const taskArray:task[]=[
  { taskID: 1, title: "Exercise", description: "Workout for atleast 30 mins.", datetime: "2021-12-30T15:32" },
  { taskID: 2, title: "Go to market", description: "Buy bread, butter and milk.", datetime: "2021-12-30T15:32" },
  { taskID: 3, title: "Study Loopback", description: "Read through the documentation of loopback.", datetime: "2021-12-30T15:32" },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskCollection=taskArray;
  selectedtask:task={taskID:0,title:"",description:"",datetime:""};
  OPenForEdit(task:task): void{
this.selectedtask=task;
  }
  AddorEdit(): void{
    if(this.selectedtask.taskID==0) //insert method
    {
      this.selectedtask.taskID = Math.max.apply(Math, this.taskCollection.map(function (x) { return x.taskID; })) + 1;
      this.taskCollection.push(this.selectedtask);
    }
    this.selectedtask = { taskID: 0, title: "" , description: "", datetime: ""};
  }
  Delete(): void{
    this.taskCollection = this.taskCollection.filter(x => x != this.selectedtask);
    this.selectedtask = { taskID: 0, title: "" , description: "", datetime: ""};
  }
}