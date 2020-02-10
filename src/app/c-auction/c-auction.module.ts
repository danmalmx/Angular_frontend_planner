import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CompanyComponent } from './auth/register/company/company.component';
import { PrivateComponent } from './auth/register/privates/private.component';
import { CAuctionRoutingModule } from './c-auction-routing.service';
import { AppSharedModule } from '../shared/app-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, CompanyComponent, PrivateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CAuctionRoutingModule,
    AppSharedModule
  ]
})
export class CAuctionModule {}
