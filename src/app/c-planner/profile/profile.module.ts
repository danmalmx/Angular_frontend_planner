import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.service';
import { AppMaterialModule } from '../../shared/app-material.module';

@NgModule({
  declarations: [],
  imports: [
    AppMaterialModule,
    CommonModule, 
    ProfileRoutingModule
  ],
   providers: []
})
export class ProfileModule { }
