import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfilePlannerComponent } from './profile-planner/profile-planner.component';

const routes: Routes = [
  { path: 'Profile', component: AddProfileComponent },
  { path: 'List', component: ProfileListComponent },
  { path: 'Planner', component: ProfilePlannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }


