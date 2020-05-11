import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor( private client: HttpClient) { }

  validateCredentials( instanceURL:string, token:string ) {
    let response = this.client.get( instanceURL + '/api/v1/apps/verify_credentials', { headers: { 'Authorization' : `Bearer ${token}` }} );
    return response;
  }

  getNotifs( instanceURL:string, token:string ){
    let response = this.client.get( instanceURL + '/api/v1/notifications', { headers: { 'Authorization' : `Bearer ${token}` }} );
    return response;
  }

  postToot( instanceURL:string, token:string, toot:string ) {
    
    let response = this.client.post( instanceURL + '/api/v1/statuses', { 
      'status': toot 
    }, { 
      headers: { 
        'Authorization' : `Bearer ${token}`
       }
    } );
    return response;
  }
}
