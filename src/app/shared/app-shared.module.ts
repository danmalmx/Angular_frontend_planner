import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppMaterialModule
  ],
  exports:[
    AppMaterialModule
  ],
  entryComponents:[],
  providers: [],
})
export class AppSharedModule { }
