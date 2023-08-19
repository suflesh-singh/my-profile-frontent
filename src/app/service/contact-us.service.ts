import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUs } from '../model/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }
  
   GetUrl="http://localhost:4000/getAllQuery"
  Url="http://localhost:4000/contactUs";


ContactUsData(value:ContactUs)
{
  return this.http.post(this.Url,value);
}

gettingAllQuery()
{
  return this.http.get(this.GetUrl)
}

}
