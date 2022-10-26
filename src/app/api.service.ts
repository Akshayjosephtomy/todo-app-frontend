import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signIn=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }
  
  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/signup",data)
  }

  addTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/addtodo",data)
  }

  myTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/mytodos",data)
  }
}
