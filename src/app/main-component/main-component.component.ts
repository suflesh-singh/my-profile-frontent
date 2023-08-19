import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Typed from 'typed.js';
import { ContactUsService } from '../service/contact-us.service';
import { ContactUs } from '../model/contactUs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  ourExperts: any = [
    {
      name: 'Shivam Singh',
      Designation: 'Web Developer',
      Address: 'Lucknow Hazaratganj',
      phone: '9934939493',
      email: 'shivamkashyap@gmail.com',
      description: 'Experts in Javascript and Angular 15',
    },
    {
      name: 'Abhishek Ojha',
      Designation: 'Web Developer',
      Address: 'Lucknow Gomtinagar',
      phone: '5655656565464',
      email: 'abhisheOjha@gmail.com',
      description: 'Experts in Javascript and Angular 15 and',
    },
    {
      name: 'Puneet Gupta',
      Designation: 'Web Developer',
      Address: 'Lucknow Tedhipuliya',
      phone: '8765384512',
      email: 'puneetGupta@gmail.com',
      description: 'Experts in Javascript and Angular 15',
    },
    {
      name: 'Prabhat Shukla',
      Designation: 'Web Developer',
      Address: 'Lucknow Trivani Nagar',
      phone: '9369587485',
      email: 'prabhatshukla@gmail.com',
      description: 'Experts in Javascript and Angular 15',
    },
    {
      name: 'Rishi Raj Saxena',
      Designation: 'Senior Software Developer',
      Address: 'Lucknow Trivani Nagar',
      phone: '9369587485',
      email: 'prabhatshukla@gmail.com',
      description: 'Experts in Javascript and Angular 15',
    },
  ];
  ContactUsForm: any;

  constructor(private fb: FormBuilder, private contactUs: ContactUsService) {
    this.ContactUsForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const options = {
      strings: [
        'Software developers design, program, build, deploy and maintain software using many different skills and tools. They also help build software systems that power networks and devices and ensure that those systems remain functional.',
      ],
      typeSpeed: 30,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '**',
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }
  successMsg = false;
  contact: ContactUs = new ContactUs();
  ngSubmit(value: any) {
    // console.log(value.value);
    // this.ContactUsForm.reset()
    this.contact.name = value.value.name;
    this.contact.email = value.value.email;
    this.contact.message = value.value.message;
    this.contactUs.ContactUsData(this.contact).subscribe((response: any) => {
      try {
        if (response) {
          this.successMsg = true;
          this.ContactUsForm.reset();
          setTimeout(() => {
            this.successMsg = false;
          }, 5000);
        }
      } catch (error) {}
    });
  }
}
