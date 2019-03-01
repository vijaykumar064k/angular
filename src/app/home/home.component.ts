import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {

  userinfo;
	errorMessage: string;
	email: string;
	warning:string;

	constructor(private userService: UserService,private router: Router) { 
	}

	// Check if user already logged in
	ngOnInit() {
	}

	// Initicate login
	checkExists(){
		console.log("email", this.email);
		this.userService.userExist(this.email).subscribe(users => {
			console.log("users1",String(users)); //handle response
      this.router.navigate(['/login/' + this.email]);
      // console.log("goto login page"); //perform action
        },
            error => {
                this.errorMessage = <any>error;
                // console.log(this.errorMessage);
                if (this.errorMessage === 'Invalid Username') {
					console.log(this.errorMessage);
                   
                } else {
					console.log(this.errorMessage);
                }
            });
	}
}
