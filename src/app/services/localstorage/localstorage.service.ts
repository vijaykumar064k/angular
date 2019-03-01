import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  // sets belrium token
  public setBelriumToken(token){
		localStorage.setItem('token',token);
	}

	//gets belrium token
	public getBelriumToken(){
		return localStorage.getItem('token');
  }
  
  // sets bkvs-dm token
  public setBKVSToken(bkvstoken){
		localStorage.setItem('bkvs-token',bkvstoken);
	}

	//gets bkvs-dm token
	public getBKVSToken(){
		return localStorage.getItem('bkvs-token');
  }
  
   // sets role of an user
   public setUserRole(role){
		localStorage.setItem('role',role);
	}

	//gets role of an user
	public getUserRole(){
		return localStorage.getItem('role');
  }
  
    // sets wallet balance
    public setBalance(balance){
      localStorage.setItem('balance',balance);
    }
  
    //gets wallet balance
    public getBalance(){
      return localStorage.getItem('balance');
    }

    // sets country of an user
    public setCountryCode(countryCode){
      localStorage.setItem('countryCode',countryCode);
    }
  
    //gets country of an user
    public getCountryCode(){
      return localStorage.getItem('countryCode');
    }

    //sets dapp id for the user
    public setDappId(dappid)
    {
      localStorage.setItem('dappid',dappid);
    }

    //gets dapp id for the suer
    public getDappId()
    {
      return localStorage.getItem('dappid');
    }
}
