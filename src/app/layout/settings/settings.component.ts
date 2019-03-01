import { Component, OnInit } from '@angular/core';
import{Validators, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
show:boolean=true;
b:string;
depForm:FormGroup
fieldForm:FormGroup
branch:string;
levels:string;
auth1:string;
auth2:string;
auth3:string;
studname:string;
enrollment:string;
degree:string;
topic:string;
year:string;
seal:string;
sign:string;
  constructor() { }

  ngOnInit() {
   this.depForm=new FormGroup({
     branch:new FormControl('',[Validators.required,Validators.minLength(2)]),
    levels:new FormControl('',[Validators.required]),
    auth1:new FormControl('',[Validators.required]),
    auth2:new FormControl('',[Validators.required]),
    auth3:new FormControl('',[Validators.required]),
   })
   this.fieldForm=new FormGroup({
    studname:new FormControl('',[Validators.required]),
    enrollment:new FormControl('',[Validators.required]),
    degree:new FormControl('',[Validators.required]),
    topic:new FormControl('',[Validators.required]),
    year:new FormControl('',[Validators.required]),
    seal:new FormControl('',[Validators.required]),
    sign:new FormControl('',[Validators.required]),
   })



  }
  showpage(b){
    if(b=="initial"){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }
  setdepartments(){
    console.log("hai");
  }


  openModal(){
    console.log("clicked");
  }


  setfields(){
    console.log("fieldsdefined");
  }
}
