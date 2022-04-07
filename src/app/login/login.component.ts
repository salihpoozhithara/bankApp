import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  database:any = {
    1000:{acno:1000,uname:"salih",password:1000,balance:5000},
    1001:{acno:1000,uname:"ijilan",password:1001,balance:8000},
    1002:{acno:1000,uname:"aarish",password:1002,balance:10000}

  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

//one way binding
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno);
    
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   // console.log(this.pswd);
  // }


  //login using event binding / two wayb binding
  login(){

    var acno=this.acno
    var pswd=this.pswd

    let database=this.database

    if(acno in database){
      if(pswd == database[acno]["password"]){
        alert("login success!!")
        this.router.navigateByUrl("dashboard")

      }else{
        alert("invalid password")
      }
    }else{
      alert("user does not exist")
    }

  }

  // login using template ref

  // login(a:any,p:any){

  //   console.log(a.value);
    

  //   //user entered acno nd passwd
  //   var acno=a.value
  //   var pswd=p.value

  //   let database=this.database

  //   if(acno in database){
  //     if(pswd == database[acno]["password"]){
  //       alert("login success!!")

  //     }else{
  //       alert("invalid password")
  //     }
  //   }else{
  //     alert("user does not exist")
  //   }

  // }

  //


}
