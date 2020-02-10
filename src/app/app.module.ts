import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './shared/app-shared.module';
import { CAuctionModule } from './c-auction/c-auction.module';
import { CPlannerModule } from './c-planner/c-planner.module';
import { ToastrModule } from 'ngx-toastr';
import { ConfigurationService } from './services/configurations.service';
import { BasicInfoComponent } from './c-planner/profile/add-profile/basic-info/basic-info.component';
import { BasicInfoEditorComponent } from './c-planner/profile/add-profile/basic-info/basic-info-editor/basic-info-editor.component';
import { EditProfileComponent } from './c-planner/profile/edit-profile/edit-profile.component';
import { PresentationComponent } from './c-planner/profile/add-profile/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    CAuctionModule,
    CPlannerModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [EditProfileComponent, PresentationComponent],

  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
