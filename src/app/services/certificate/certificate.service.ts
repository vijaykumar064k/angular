import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/timeoutWith';
 import 'rxjs/add/operator/timeout';
 import 'rxjs/add/operator/toPromise';
 import { Constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  dappid=localStorage.getItem('dappid');
  PayslipmonthStatsUrl:string;
  EmployeeDataUrl:string;
  payslipstatisticUrl:string;
  PayslipInitialissueUrl:string;
  DepartmentUrl:string;
  EmpDesignationsUrl:string;
  getbanksUrl:string;
  registeremployeeUrl:string;
  issueTransactionUrl:string;
  customfieldsUrl:string;
  EmployeeDesignationsUrl:string;





  constructor(private http: Http) { 
    this. PayslipmonthStatsUrl=Constants.HOST_URL+this.dappid+"/employee/payslip/month/status";
    this.EmployeeDataUrl=Constants.HOST_URL+this.dappid+"/employeeData";
    this.payslipstatisticUrl=Constants.HOST_URL+this.dappid+"payslip/statistic";
    this.PayslipInitialissueUrl=Constants.HOST_URL+this.dappid+"/payslip/initialIssue";
    this.DepartmentUrl=Constants.HOST_URL+this.dappid+"/department/get";
    this.EmpDesignationsUrl=Constants.HOST_URL+this.dappid+"/employees/getDesignations";
    this.getbanksUrl=Constants.HOST_URL+this.dappid+"getBanks";
    this.registeremployeeUrl=Constants.HOST_URL+this.dappid+"registerEmploye";
    this.issueTransactionUrl=Constants.HOST_URL+this.dappid+"issueTransactionCall";
    this.customfieldsUrl=Constants.HOST_URL+this.dappid+"/customFields/get";
    this.EmployeeDesignationsUrl=Constants.HOST_URL+this.dappid+"/employees/getDesignations";
  }
  getBlockchaindata(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.PayslipmonthStatsUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  getEmployeeDetails(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.EmployeeDataUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }

  payslipstatistic(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.payslipstatisticUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  PayslipInitialissue(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this. PayslipInitialissueUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  Department(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.DepartmentUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  EmpDesignations(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.EmpDesignationsUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  getbanks(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.getbanksUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  registeremployee(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.registeremployeeUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  issueTransaction(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.issueTransactionUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  customfields(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.customfieldsUrl,data,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }
  EmployeeDesignations(){
    var data={}
    const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.EmployeeDesignationsUrl,data,options).timeout(1000)
    .map((res:Response)=>{
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
