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

//displaypayslipdata pop up API is pending. It has to be added in common

@Injectable({
  providedIn: 'root'
})
export class AuthorizerService {
  locvals = new LocalstorageService();
  dappid = this.locvals.getDappId();
  penidngSignsUrl : string;
  authorizeUrl : string;
  rejectPayslipUrl : string;
  authorizedPayslipsUrl : string;
  rejectedPayslipsUrl : string;

  constructor(private http: Http) { 
    this.penidngSignsUrl = Constants.HOST_URL + this.dappid + 'authorizers/pendingSigns';
    this.authorizeUrl = Constants.HOST_URL + this.dappid + 'authorizer/authorize';
    this.rejectPayslipUrl = Constants.HOST_URL + this.dappid + 'authorizer/reject';
    this.authorizedPayslipsUrl = Constants.HOST_URL + this.dappid + 'authorizer/authorizedAssets';
    this.rejectedPayslipsUrl = Constants.HOST_URL + this.dappid + 'authorizer/rejecteds';
  }

  pendingSigns(aid,limit,offset){
    var params=
    {
      aid: aid,
      limit: limit,
      offset: offset
    };
    const headers = new Headers({ 'Content-Type': 'application/json',});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.penidngSignsUrl,params,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
  }

  authorize(pid)
  {
    var params=
    {
      pid: pid
    }
    const headers = new Headers({ 'Content-Type': 'application/json',});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.authorizeUrl,params,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
  }

  rejectPayslip(pid)
  {
    var params=
    {
      pid: pid
    }
    const headers = new Headers({ 'Content-Type': 'application/json',});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.rejectPayslipUrl,params,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
  }

  authorizedPayslips()
  {
    const headers = new Headers({ 'Content-Type': 'application/json',});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.authorizedPayslipsUrl,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
  }

  rejectedPayslips()
  {
    const headers = new Headers({ 'Content-Type': 'application/json',});
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.rejectedPayslipsUrl,options).timeout(1000)
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

