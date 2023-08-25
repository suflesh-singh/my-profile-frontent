import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {HttpClientModule} from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AddTeamComponent } from './add-team/add-team.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponentComponent,
    FooterComponent,
    CompanyComponent,
    ExperienceComponent,
    ContactComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
