import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit {
 show:boolean=true;
 a:string;
 b:string;
 show1:boolean=true;
 display='none';
  constructor() { }

  ngOnInit() {


  }
  setflag(a){
    console.log(a)
    console.log("clicked");
    if(a=='issuer'){
      console.log("issuer")
      this.show=true
    }
    else{
      console.log("auth")

    this.show=false;
    }
 
console.log(this.show)

  }


  showpage(b){
      if(b=='initial'){
        this.show1=true;
      }
      else{
        this.show1=false;
      }
  }


  openmodel(){
    this.display='block';
  }
  closemodel(){
    this.display='none';

  }
}

