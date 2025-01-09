import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'destination/:name/:image/:description/:distance/:travel', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
