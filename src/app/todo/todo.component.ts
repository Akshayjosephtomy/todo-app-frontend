import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  name=localStorage.getItem("name")
  userid=localStorage.getItem("userid")
  todo=""
  start_date=""
  end_date=""

  readvalue=()=>{
    let data={
      "todo":this.todo,
      "start_date":this.start_date,
      "end_date":this.end_date,
      "userid":this.userid
    }
    console.log(data)
    this.myapi.addTodo(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Post Added successfully")
      }
    )
    this.todo="",
    this.start_date="",
    this.end_date=""

  }  


  fetchData=()=>{
    let data={
      "userid":this.userid
    }
    console.log(data)
    this.myapi.myTodo(data).subscribe(
      (resp)=>{
        this.todoData=resp
      }
    )
  }

  todoData:any=[]


  ngOnInit(): void {
  }

}
