import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


@HostListener('window:resize', ['$event'])
export class HeaderComponent implements OnInit {
  menuMobileView=false;
  constructor() { 
   
  }

  ngOnInit(): void {
    
    
  }
  onResize(event: any) {
    console.log(event.target.innerWidth)
  }
}
