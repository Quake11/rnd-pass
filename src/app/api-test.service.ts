import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiTestService {

  private contactsUrl = '/api/user';

  constructor(private http: Http) { }

  getContacts(): Promise<String> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
