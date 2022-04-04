import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // aim="Your perfect banking partner"
  accno="Your account number please..!!"
  acno=""
  pswd=""
  
  //database

  database = {
    1000:{acno:1000,uname:"salih",password:1000,balance:5000},
    1001:{acno:1000,uname:"ijilan",password:1001,balance:8000},
    1002:{acno:1000,uname:"aarish",password:1002,balance:10000}

  }

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    // console.log(this.acno);
    
  }
  passChange(event:any){
    this.pswd=event.target.value
    // console.log(this.pswd);
  }

  login(){
    alert("login success!!")
  }


}
