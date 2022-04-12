import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  

  constructor(private router:Router,private ds:DataService) { }

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

    //user entered acno and psw
    var acno=this.acno
    var pswd=this.pswd

    const result = this.ds.login(acno,pswd)
    if (result) {
      alert("login success!!")
      this.router.navigateByUrl("dashboard")
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
