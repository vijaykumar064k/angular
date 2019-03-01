import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise'; 
 import {Login}from '../logInterface';
 import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email : string;
password: string;

logList :Login[]=[];
errorMessage:string;
warning:string;
loginForm: FormGroup;
display='none';
title1:string;

  constructor(private router: Router,
               private userService:UserService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('',[Validators.required])
    
    });
  }
  login()
  {
    localStorage.setItem('isLoggedin','true');
    this.router.navigate(['/wallet']);
  }

  loginemail() {
    var email1 = this.loginForm.value.email;
    localStorage.setItem("email",email1);
    }
async openModal()
{
   this.display="block"; 
}
onCloseHandled()
{
  this.display='none'; 
}
 async onClick()
{
var  secret, email, password, dappid;
const loginResponse = await this.checkLogin();
if(loginResponse["isSuccess"]===true)
{   this.openModal();
    console.log(loginResponse);
    let token=loginResponse["data"].token;
    console.log(token);
    localStorage.setItem("BEL token",token);
}
else
{
    console.log("username and password is incorrect") ;
}
}

async hyperLedgerLogin()
{
  var token=localStorage.getItem('BEL token') 
  let secret= this.title1;
  console.log(secret);
  localStorage.setItem("secret", secret);
  console.log(token)
  const hllogin = await this.checkHyperLogin(secret, token);
  console.log(hllogin);
  console.log(JSON.stringify(hllogin))
         if (hllogin["isSuccess"] === true) 
        {
        console.log(hllogin);
        let btoken=hllogin["data"];
        let btoken1=JSON.parse(btoken);
        let bt = btoken1.token;        
        localStorage.setItem("bkvsdm_token", bt);
        this.getKycStatus();
        const res4 = await this.getAddress();
        console.log(res4);
        let obj=res4["data"];
        let a=obj["countries"];
        let b=a[0];
        console.log(b)
        let c=b["wallets"];
        var d=c[0];
        let add= d.address;
        console.log(add);
        localStorage.setItem("address", add);
        const res5 = await this.getBalance(add);
        console.log(res5);   
        this.getRole();
        }

else
{
  console.log("wrong")
}
}

async  checkHyperLogin(secret, token) 
{
  let promise = await this.userService.onCheckHyperLedger(secret,token);
  return promise;
}

async getKycStatus()
{
  var token=localStorage.getItem('BEL token')
  const kycstatus = await this.CheckKYCStatus(token);
  console.log(kycstatus);
  let a=kycstatus["data"];
  var obj=a[0].kycstatus;
  localStorage.setItem("kycStatus",obj);
}
  
async getAddress()
{
  let promise = await this.userService.ongetAddress();
  return promise;
}

async getBalance(add)
{

  let promise = await this.userService.ongetBal(add);
  return promise;
}

async getRole()
{
var roleid,dappid;
  const data = await this.checkRole();
  console.log(data);
  let a=data["dappid"];
  let b=data["role"];
     localStorage.setItem("country", data["country"]);
    localStorage.setItem("companyname", data["company"]);
    localStorage.setItem("name", data["name"]);
    localStorage.setItem("roleId", b);
    localStorage.setItem("dappid", a);
    var kycStatus = localStorage.getItem("kycStatus");
    console.log(kycStatus)
    if (kycStatus === "true") 
    {
      console.log("wallet page");
    }
    else if (b === "new user")
     {   
          console.log("wallet page");
     }
        else if (b === "superuser") 
        {
           console.log("superadmin page");
        }
        else if (b === "issuer") 
        {
          console.log("Issuer page");
           const res = await this.getissuerid();
           console.log(res);
           let a=res["result"];
           let id=a.iid;
           localStorage.setItem("issuerid",id);
           const response=await this.issuerdata(id);
           console.log(response);
          let b=response["issuer"];
          console.log(b);
          let isdept=b.departments;
          localStorage.setItem("IssuerDepartments",isdept);
        }
        else if (b === "authorizer") 
        {
               const res = await this.getauthid();
               console.log(res);
               let a=res["result"];
               let id=a.aid;
               console.log(id);
               localStorage.setItem("authid", id);
                }
        else {
            console.log("Invalid user role identified...");
        }
    }

async getauthid()
{
  let promise = await this.userService.ongetauth();
  return promise;
}
async getissuerid()
{
  let promise = await this.userService.ongetIssuer();
  return promise;

}
async authdata(id)
{
  let promise = await this.userService.ongetauthdata(id);
  return promise;
}
async issuerdata(id)
{
  let promise = await this.userService.oncheckIssuerData(id);
  return promise;
}
async checkRole()
{
  let promise = await this.userService.oncheckRole();
  return promise;
}

async CheckKYCStatus(token:string)
{
  let promise = await this.userService.onCheckYCStatus(token);
  return promise;

}
//let obj = JSON.parse(loginResponse["data"]);
//console.log(obj.token)


//let token=loginResponse.data.token;
//console.log(obj)
//console.log(Object.values(loginResponse));



async checkLogin() 
    {
      console.log("two")
     
    let promise = await this.userService.onClickk(this.loginForm.value);
   // promise.then((val) => console.log(val)).catch((err) => console.error(err));
    return promise;
    }
  }
  


