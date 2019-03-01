import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from '../../constants';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regUrl: string;

  constructor(private http: HttpClient) { 
    this.regUrl=Constants.HOME_URL + 'user/signup/';
  }

  getCountries() {
    //console.log("Im in");
    return this.http.get('http://54.254.174.74:8080/api/v1/countries').map
      ((res: Response) => {
        console.log("data",res['data']);
       return res['data'];
   })
   //   catchError(this.handleError)
  }

  

  async onReg(data: string): Promise<Object>
  {
    console.log("third");
       const headers = new Headers({ 'Content-Type': 'application/json','magic': '594fe0f3',});
      const options = new RequestOptions({ headers: headers, method: 'post' });
      const resp= await this.http.post(this.regUrl,data).toPromise()
  //     . map((res: Response) => {
  //         console.log("data",res.json());
  //       // return res.json();
  //    })
     return resp;
  }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   return throwError('Something bad happened. Please try again later.');
  // }
  private handleError(error:Response)
  {
console.error(error);
return Observable.throw(error.json().message)
  }

}