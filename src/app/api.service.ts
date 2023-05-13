import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* The ApiService class is used to make HTTP POST requests to a specified base URL with JSON data. */
export class ApiService {

  baseurl = "http://3.88.182.229:8081/";
  // baseurl = "http://localhost:8081/";

  constructor(private http:HttpClient) { }

  post(path:string, data:any){
    const headers = {'Content-type':'application/json'};
    const body = JSON.stringify(data);
    return this.http.post(this.baseurl + path, body, {'headers':headers});
  }
}

