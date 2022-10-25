import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService ) { }

  email=""
  pass=""

  readvalue=()=>{
    let data={
      "email":this.email,
      "pass":this.pass
    }
    console.log(data)
    this.myapi.signIn(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
          localStorage.setItem("name",response[0].name)
          localStorage.setItem("userid",response[0].id)
          this.myrouter.navigate(["/todo"])
        } else {
          alert("Invalid Credentials")
        }
      }
    )
  }
  ngOnInit(): void {
  }

}
