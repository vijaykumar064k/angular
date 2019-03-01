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

export class DashboardService {
dappid=localStorage.getItem('dappid');
SuperUserStatsUrl:string;
IssuerStatsUrl:string;
AuthorizerStatsUrl:string;
RecentIssuedUrl:string;
PayslipInitiatedUrl:string;
PayslipIssuedUrl:string;
IssuerDataUrl:string;
PayslipStatsUrl:string;
EmployeeDataUrl:string;
PayslipDataUrl:string;
IssuerPayslipsUrl:string;
PendingPayslipsUrl:string;
ConfirmedPayslipUrl:string;
IssuerEmployeeUrl:string;
DepartmentsUrl:string;
EmpDesignationsUrl:string;
authid:string;
iid:string;

  constructor(private http: Http) { 
    this.SuperUserStatsUrl=Constants.HOST_URL+this.dappid+'/superuser/statistics';
    this.IssuerStatsUrl=Constants.HOST_URL+this.dappid+'/issuer/statistic';
    this.AuthorizerStatsUrl=Constants.HOST_URL+this.dappid+'/authorizer/statistic';
    this.RecentIssuedUrl=Constants.HOST_URL+this.dappid+'/recentIssued';
    this.PayslipInitiatedUrl=Constants.HOST_URL+this.dappid+'/payslip/initiated';
    this.PayslipIssuedUrl=Constants.HOST_URL+this.dappid+'/payslip/issued';
    this.IssuerDataUrl=Constants.HOST_URL+this.dappid+'/issuer/data';
    this.PayslipStatsUrl=Constants.HOST_URL+this.dappid+'/payslip/statistic';
    this.EmployeeDataUrl=Constants.HOST_URL+this.dappid+'/employeeData';
    this.PayslipDataUrl=Constants.HOST_URL+this.dappid+'/payslip/getPayslip';
    this.IssuerPayslipsUrl=Constants.HOST_URL+this.dappid+'/issuer/data/issuedPayslips';
    this.PendingPayslipsUrl=Constants.HOST_URL+this.dappid+'/issuer/pendingIssues';
    this.ConfirmedPayslipUrl=Constants.HOST_URL+this.dappid+'/payslip/confirmedIssues';
    this.IssuerEmployeeUrl=Constants.HOST_URL+this.dappid+'/issuer/employeesRegistered';
    this.DepartmentsUrl=Constants.HOST_URL+this.dappid+'/getDepartments/authorizers';
    this.EmpDesignationsUrl=Constants.HOST_URL+this.dappid+'/employees/getDesignations';
    this.authid=localStorage.getItem('authorizerid');
    this.iid=localStorage.getItem('issuerid');
  }
  getSuperuserData(){
    var data={}
    const headers=new Headers({'Content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.SuperUserStatsUrl,options).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }

  getIssuerData(){
    var data={}
    const headers=new Headers({'Content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.IssuerStatsUrl,data).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }

  getAuthData(){
    var data={}
    const headers=new Headers({'Content-Type':'application/json','magic':'594fe0f3'});
    const options=new RequestOptions({headers:headers,method:'post'});
    return this.http.post(this.AuthorizerStatsUrl,data).timeout(1000)
    .map((res:Response)=>{
      console.log("data",res.json());
      return res.json();
    })
    .catch(this.handleError);
  }

recentIssued(){
  var data={
    limit:"5",
    offset:"0"
  }
  const headers=new Headers({'Content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.RecentIssuedUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

pendingAuthorizationList(){
  var data={}
const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
const options=new RequestOptions({headers:headers,method:'post'});
return this.http.post(this.PayslipInitiatedUrl,data).timeout(1000)
.map((res:Response)=>{
  console.log("data",res.json());
  return res.json();
})
.catch(this.handleError);
}

totalIssues(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.PayslipIssuedUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

getissuerdetails(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.IssuerDataUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

getBlockchaindata(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.PayslipStatsUrl,data).timeout(1000)
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
  return this.http.post(this.EmployeeDataUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

getPayslipData(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.PayslipDataUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

totalIssuerpayslips(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.IssuerPayslipsUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

pendingpayslips(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.PendingPayslipsUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

pendingissues(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.ConfirmedPayslipUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

totalemployee(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.IssuerEmployeeUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}

getDesignations(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.EmpDesignationsUrl,data).timeout(1000)
  .map((res:Response)=>{
    console.log("data",res.json());
    return res.json();
  })
  .catch(this.handleError);
}


getDepartments(){
  var data={}
  const headers=new Headers({'content-Type':'application/json','magic':'594fe0f3'});
  const options=new RequestOptions({headers:headers,method:'post'});
  return this.http.post(this.DepartmentsUrl,data).timeout(1000)
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
