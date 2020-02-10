import { NgModule } from '@angular/core';
import { AppSharedModule } from '../shared/app-shared.module';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';



@NgModule({
  declarations: [
  ],
  imports: [
    AppSharedModule
  ],
  exports:[
    AppSharedModule
  ],
  entryComponents:[AddProfileComponent],
  providers: [],
})
export class CPlannerSharedModule { }
