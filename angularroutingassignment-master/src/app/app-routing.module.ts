import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'places', component: PlacesComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
