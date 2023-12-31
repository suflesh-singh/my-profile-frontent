import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { CompanyComponent } from './company/company.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AddTeamComponent } from './add-team/add-team.component';

const routes: Routes = [
{
  path:'',redirectTo:'suflesh-singh',pathMatch:'full'
},
{
  path:'suflesh-singh',component:MainComponentComponent
},
{
  path:'company',component:CompanyComponent
},
{
  path:'experience',component:ExperienceComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'addd-team',component:AddTeamComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
