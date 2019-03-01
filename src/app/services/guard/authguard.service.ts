import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router) { }
 canActivate() {
  //   if (localStorage.getItem('isLoggedin')) {
  //       return true;
  //   }

  //   this.router.navigate(['/home']);
  //   return false;
   localStorage.setItem('isLoggedin','true');
   return true;
  }
}