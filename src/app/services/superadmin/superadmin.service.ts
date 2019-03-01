import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../../constants';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  locvals = new LocalstorageService();
  dappid = this.locvals.getDappId();
  getDepartmentsUrl : string;
  getIssuedPayslipsUrl : string;
  getSignedPayslipsUrl : string;
  getIssuersUrl : string;
  getAuthorizersUrl : string;
  removeIssuerUrl : string;
  removeAuthorizerUrl : string;
  getCountriesUrl : string;
  addUserUrl : string;
  addAuthorizerUrl : string;

  constructor(private http: Http) { 
    this.getDepartmentsUrl = Constants.HOST_URL + this.dappid + '/department/get';
    this.getIssuedPayslipsUrl = Constants.HOST_URL + this.dappid + '/issuer/data/issuedPayslips';
    this.getSignedPayslipsUrl = Constants.HOST_URL + this.dappid + '/authorizer/signedPayslips';
    this.getIssuersUrl = Constants.HOST_URL + this.dappid + '/issuers';
    this.getAuthorizersUrl = Constants.HOST_URL + this.dappid + '/authorizers';
    this.removeIssuerUrl = Constants.HOST_URL + this.dappid + '/issuers/remove';
    this.removeAuthorizerUrl = Constants.HOST_URL + this.dappid + '/authorizers/remove';
    this.getCountriesUrl = Constants.SWAGGERAPI + 'countries';
    this.addUserUrl = Constants.HOST_URL + this.dappid + 'registerUser';
  }

  getDepartments(){
    const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.getDepartmentsUrl,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
}

getIssuedPayslips(iid,limit,offset){
  var data={
    iid: iid,
    limit: limit,
    offset: offset
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post'});
  return this.http.post(this.getIssuedPayslipsUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

getSignedPayslips(aid,limit,offset){
  var data={
    aid: aid,
    limit: limit,
    offset: offset
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.getSignedPayslipsUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

getIssuers(limit,offset,filterdep) 
{
  var data={
    limit: limit,
    offset: offset,
    department: filterdep
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.getIssuersUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

getAuthorizers(limit,offset,filterdep)
{
  var data={
    limit: limit,
    offset: offset,
    department: filterdep
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.getAuthorizersUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

removeIssuer(iid)
{
  var data={
    iid: iid
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.removeIssuerUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

removeAuthorizer(aid)
{
  var data={
    aid: aid
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.removeAuthorizerUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

getCountries()
{
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'get' });
  return this.http.get(this.getCountriesUrl,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

addUser(data)
{
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3'});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.addUserUrl,data,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}


private handleError(error: Response) {
  console.error(error);
 return Observable.throw(error.json().message);
}
}
