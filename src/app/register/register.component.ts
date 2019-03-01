import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'; 
import { RegisterService } from '../services/register/register.service';
import { Reg } from '../reg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  countrycode: string;
  countryid: string;
  type: string = "merchant";
  regList :Reg[]=[];
  email:string;
  password:string;
  name:string;
  lastName:string;

  regForm: FormGroup;
  countries:{};

  public onChangeCountry : Function; 
  constructor(private router: Router,private servService: RegisterService) { }
 

  ngOnInit() :void {
    
    this.onChangeCountry = (e) => {
      this.servService.getCountries().subscribe(
        data => {
          this.countries = data
          //console.log(data);
          //console.log(this.countries[0]['countryCode'])
          var e = (document.getElementById("ide")) as HTMLSelectElement;
          var sel = e.selectedIndex - 1;
          this.countrycode = this.countries[sel]['countryCode'];
          this.countrycode = this.countrycode ? this.countrycode: "undefined";
          this.countryid = this.countries[sel]['countryID'];
          console.log(this.countryid)
         });
    } 

    this.regForm = new FormGroup({
      companyname: new FormControl(''),
      Username: new FormControl(''),
      AdminEmail: new FormControl(''),
      country: new FormControl(''),
      Password: new FormControl(''),
      confirmpassword: new FormControl('')
    });
  }

 async onClick1(){
   console.log("first")
 
  //  var email=this.regForm.value.AdminEmail;
  //  console.log(email)
  const regResponse = await this.checkSignup();
  //alert(await this.checkLogin());
  console.log(JSON.stringify(regResponse))
 if(regResponse["isSuccess"]===true)
   {
  console.log(regResponse);
  alert("registeration successful!");
}
else{
  alert("registeration unsuccess");
  }
}

async checkSignup() 
    {
      this.email= this.regForm.value.AdminEmail;
      this.lastName=this.regForm.value.companyname;
      this.name= this.regForm.value.Username;
      this.password= this.regForm.value.Password;
      //console.log(this.email)
      //console.log(this.countryid+this.email)
      var regData :any = {
        countrycode: this.countrycode,
        countryId:String(this.countryid),
        email: this.email,
        lastName: this.lastName,
        name: this.name,
        password: this.password,
        type: "merchant"
      }
    console.log("second")
    console.log(regData)
    let promise = await this.servService.onReg(regData);
    return promise;
    }
}
