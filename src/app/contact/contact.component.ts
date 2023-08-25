import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../service/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactUsService) { }

  ngOnInit(): void {
    this.gettingAllQuery()
  }

getAllData:any=[]
gettingAllQuery()
{
  return this.contactService.gettingAllQuery().subscribe((response:any)=>{
    console.log(response,'reasponse');
    this.getAllData=response;
  })
}


}
