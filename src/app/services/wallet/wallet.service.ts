import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/toPromise';
import { Constants } from 'src/app/constants';
import { RequestOptionsService } from '../requestoptions/request-options.service';

//getDappBalance API is pending. It has to be added in common
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  registerDappUrl : string;
  createOrderUrl : string;
  verifyAndCaptureUrl : string;

  constructor(private http : Http, private request : RequestOptionsService) {
    this.registerDappUrl = Constants.HOME_URL + 'makeDapp';
    this.createOrderUrl = Constants.SERVERURL + 'razorpay/createOrder';
    this.verifyAndCaptureUrl = Constants.SERVERURL + 'rechargeWallet';
   }

   registerDapp(data){
    var params = {
      secret: data.passphrase,
      des: data.description,
      email: data.email,
      company: data.company,
      country: data.country,
      name: data.dappname,
      assetType: data.assetType    //"payslip"
  };
    const headers = new Headers({ 'Content-Type': 'application/json',});
    // const headers = this.request.getDappRequestOptions();
    const options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post(this.registerDappUrl,params,options).timeout(1000)
    . map((res: Response) => {
        console.log("data",res.json());
       return res.json();
   })
   .catch(this.handleError);
}

createOrder(amount){
  var params = {
    amount: amount
};
  const headers = new Headers({ 'Content-Type': 'application/json',});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.createOrderUrl,params,options).timeout(1000)
  . map((res: Response) => {
      console.log("data",res.json());
     return res.json();
 })
 .catch(this.handleError);
}

verifyAndCapture(ord_id,payment_id,signature,walletAddress,countryCode,amount)
{
  var params = {
    ord_id: ord_id,
    payment_id: payment_id,
    signature: signature,
    address:walletAddress,
    countryCode:countryCode,
    amount:amount
};
  const headers = new Headers({ 'Content-Type': 'application/json',});
  const options = new RequestOptions({ headers: headers, method: 'post' });
  return this.http.post(this.verifyAndCaptureUrl,params,options).timeout(1000)
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
