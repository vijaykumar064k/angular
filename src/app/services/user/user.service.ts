import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';
 import { Constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  existUrl: string;
  url: string;
  regUrl:string;
  hyperledgerLogin:string;
  KYCLogin:string;
  getAddss:string;
  getBal:string;
  getRole:string;

  constructor(private http: Http) {
    this.existUrl = Constants.HOME_URL + 'user/exists';
    this.url = Constants.HOME_URL + 'user/login/';
    this.regUrl=Constants.HOME_URL + 'user/signup/';
    this.hyperledgerLogin=Constants.HOME_URL + 'user/hllogin/';
    this.KYCLogin= Constants.SWAGGERAPI+'user/countries/kyc/';
    this.getAddss=Constants.HOME_URL + 'user/wallet/';
    this.getBal=Constants.HOME_URL + 'user/balance/';
    this.getRole=Constants.HOME_URL + 'user/dappid/';
    
    
	 }
  
    userExist(email){
        const body = {
            email: email          
        };
        const headers = new Headers({ 'Content-Type': 'application/json',});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.existUrl, body, options).timeout(300000)
            .map((res: Response) => {
                 console.log("data",res.json());
                return res.json();
            })
            .catch(this.handleError);
    }

    async onClickk(data: string): Promise<Object>
        {
            console.log("three");
            const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
            const options = new RequestOptions({ headers: headers, method: 'post' });
            const res= await this.http.post(this.url,data,options).timeout(300000).toPromise()
            return res.json();
        }

        

       async onCheckHyperLedger(secret:string,token:string):Promise<object>
       {
           var data=
           {
               secret: secret,
               token:token
           }
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post(this.hyperledgerLogin,data,options).timeout(300000).toPromise()
        return res.json();
       }
	
      async onCheckYCStatus(token:string):Promise<object>
      {
        const headers = new Headers({ 'Content-Type': 'application/json','belrium-token': token});
        const options = new RequestOptions({ headers: headers, method: 'get' });
        const res= await this.http.get(this.KYCLogin,options).timeout(300000).toPromise()
        return res.json();
      }

      async ongetAddress():Promise<object>
      {
          let token=localStorage.getItem('BEL token');
          var params=
          {
              token:token
          };
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post(this.getAddss,params,options).timeout(300000).toPromise()
        return res.json();
      }
    
      async ongetBal(add):Promise<object>
      {
        let token=localStorage.getItem('BEL token');
          var param=
          {
              add:add,
              token:token

          };
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post(this.getBal,param,options).timeout(300000).toPromise()
        return res.json();
      }

     async oncheckRole():Promise<object>
    {
    let email=localStorage.getItem('email');
    var params=
    {
        email:email
    };
    const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    const res= await this.http.post(this.getRole,params,options).timeout(300000).toPromise()
    return res.json();
    }

    async ongetIssuer():Promise<object>
    {
        let dappid=localStorage.getItem('dappid');
        let email=localStorage.getItem('email');
        var params=
        {
        email:email
        };
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post("http://54.157.252.226:9305/api/dapps/" + dappid + "/" + 'issuers/getId/',params,options).timeout(300000).toPromise()
        return res.json();
    }

    async oncheckIssuerData(iid):Promise<object>
    {
        let dappid=localStorage.getItem('dappid');
     var param=
     {
         iid:iid
     }; 
     console.log(iid);

       const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post("http://54.157.252.226:9305/api/dapps/" + dappid + "/" + 'issuer/data/',JSON.stringify(param),options).timeout(300000).toPromise()
        return res.json();
    }

    async ongetauth():Promise<object>
    {
        let email=localStorage.getItem('email');
        let dappid=localStorage.getItem('dappid');
        var param=
        {
            email:email
        }
       
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post("http://54.157.252.226:9305/api/dapps/" + dappid + "/" + 'authorizers/getId',param,options).timeout(300000).toPromise()
        return res.json();
    }


    async ongetauthdata(aid):Promise<object>
    {
        let dappid=localStorage.getItem('dappid');
        var params=
        {
            aid:aid
        }
        const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
        const options = new RequestOptions({ headers: headers, method: 'post' });
        const res= await this.http.post("http://54.157.252.226:9305/api/dapps/" + dappid + "/" + 'authorizer/data',params,options).timeout(300000).toPromise()
        return res.json();

    } 

	private handleError(error: Response) {
         console.error(error);
        return Observable.throw(error.json().message);
    }
  }
