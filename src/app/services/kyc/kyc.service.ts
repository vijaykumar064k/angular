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
export class KycService {
  FetchKycDocUrl: string;
  MetaDataFormFieldsUrl:string;
  KycPaymentUrl:string;
  SendVerificationUrl:string;
  GetPublikeyUrl:string;
  EnableKycUrl:string;
  
  token:string;
  bkvsdm_token:string;

  constructor(private http: Http) { 
    this.FetchKycDocUrl = Constants.SWAGGERAPI + 'users/document';
    this.MetaDataFormFieldsUrl = Constants.SWAGGERAPI+'kycdocs/kycdocformfieldmetas';
    this.KycPaymentUrl = Constants.SWAGGERAPI+'kycuserdocuments/payment';
    this.SendVerificationUrl = Constants.SWAGGERAPI+'kycuserdocuments/send/verification';
    this.GetPublikeyUrl = 'https://node1.belrium.io/api/accounts/open';
    this.EnableKycUrl = Constants.SWAGGERAPI+'transactions/enable/account';
    this.token = localStorage.getItem('token'); 
    this.bkvsdm_token = localStorage.getItem('bkvsdm_token');
    // this.url = Constants.SWAGGERAPI + 'kycuserdocuments/upload';
  }
  
  fetchKycDocument(token){
    const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3','belrium-token':this.token});
    const options = new RequestOptions({ headers: headers, method: 'get' });
    return this.http.get(this.FetchKycDocUrl).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
}

getMetaDataFormFields(documentMetaId, documentTypeId)
{
  var countryCode=localStorage.getItem('countryCode');
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3','belrium-token':this.token});
  const options = new RequestOptions({ headers: headers, method: 'get' });
  return this.http.get(this.MetaDataFormFieldsUrl +'?kycDocumentMetaId='+ documentMetaId + '&kycDocumentTypeId=' + documentTypeId + '&countryCode=' + countryCode,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);

}

kycPayment(kycUserDocumentID, secret)
{
  var countryCode=localStorage.getItem('countryCode');
  var publicKey=localStorage.getItem('publicKey');
  var data={
    kycUserDocumentID: kycUserDocumentID,
    publicKey: publicKey,
    secondSecret:"",
    secret: secret,
    senderCountryCode: countryCode
  };
  
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3','belrium-token':this.token});
  const options = new RequestOptions({ headers: headers, method: 'put' });
  return this.http.put(this.KycPaymentUrl,data).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);

}

sendVerification(kycUserDocumentID)
{ 
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3','belrium-token':this.token,'bkvsdm-token': this.bkvsdm_token});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.SendVerificationUrl+'?kycUserDocumentID=' + kycUserDocumentID,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);

}

getPublicKey(passPhrase) {
  var countryCode=localStorage.getItem('countryCode'); 
  var data={
    secret:passPhrase,
    countryCode:countryCode
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.GetPublikeyUrl,data).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);

}

doEnableKYC(publicKey, secret) {
  var countryCode=localStorage.getItem('countryCode'); 
  var data = {
      countryCode: countryCode,
      publicKey: publicKey,
      secondSecret: " ",
      secret: secret
  };
  const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3','belrium-token':this.token,});
  const options = new RequestOptions({ headers: headers, method: 'put' });
  return this.http.put(this.EnableKycUrl,data).timeout(1000)
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
