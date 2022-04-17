import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    //database

    database:any = {
      1000:{acno:1000,uname:"salih",password:1000,balance:5000},
      1001:{acno:1000,uname:"ijilan",password:1001,balance:8000},
      1002:{acno:1000,uname:"aarish",password:1002,balance:10000}
  
    }
  

  constructor() { 

  }
    //register
    register(uname:any,acno:any,password:any){

      let database=this.database
      if(acno in database){
        //already exist
        return false
      }else{
        //add details in db
        database[acno]={
          acno,
          uname,
          password,
          balance:0
        }
        console.log(database);
        
        return true
      }

    }

    //login

    login(acno:any,pswd:any){
  
      let database=this.database
  
      if(acno in database){
        if(pswd == database[acno]["password"]){
          //already exist in db
          return true
  
        }else{
          alert("invalid password")
          return false
        }
      }else{
        alert("user does not exist")
        return false
      }
  
    }

    //deposit
    deposit(acno:any,pswd:any,amt:any){
      var amount = parseInt(amt)


      let database = this.database

      if (acno in database) {
        if (pswd == database[acno]["password"]) {
          database[acno]["balance"] += amount
          return  database[acno]["balance"] 
        }else{
          alert("incorrect password!!")
          return false
        }
        
      }else{
        alert("user does not exist!!")
        return false
      }

    }

    //withdraw
    withdraw(acno:any,pswd:any,amt:any){
      var amount = parseInt(amt)


      let database = this.database

      if (acno in database) {
        if (pswd == database[acno]["password"]) {
          if(database[acno]["balance"] >amount){
            database[acno]["balance"] -= amount
            return  database[acno]["balance"] 
          }else{
            alert("insufficient balance!!")
           return false
          }

          database[acno]["balance"] += amount
          return  database[acno]["balance"] 
        }else{
          alert("incorrect password!!")
          return false
        }
        
      }else{
        alert("user does not exist!!")
        return false
      }

    }

}
