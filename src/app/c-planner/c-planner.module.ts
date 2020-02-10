import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPlannerSharedModule } from './c-planner.shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BasicInfoService } from './profile/add-profile/basic-info/basicinfo.service';
import { ProfileModule } from './profile/profile.module';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfilePlannerComponent } from './profile/profile-planner/profile-planner.component';
import { BasicInfoComponent } from './profile/add-profile/basic-info/basic-info.component';
import { PresentationComponent } from './profile/add-profile/presentation/presentation.component';
import { BasicInfoEndpointService } from './profile/add-profile/basic-info/basicinfo.endpoint.service';
import { PresentationEndpointService } from './profile/add-profile/presentation/presentation.endpoint.service';
import { PresentationService } from './profile/add-profile/presentation/presentation.service';
import { BasicInfoEditorComponent } from './profile/add-profile/basic-info/basic-info-editor/basic-info-editor.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { PresentationEditorComponent } from './profile/add-profile/presentation/presentation-editor/presentation-editor.component';



@NgModule({
  declarations: [
    AddProfileComponent,
    EditProfileComponent,
    ProfileListComponent,
    ProfilePlannerComponent,
    BasicInfoComponent,
    PresentationComponent,
    BasicInfoEditorComponent,
    PresentationEditorComponent,
  ],
  imports: [
    CPlannerSharedModule,
    CommonModule,
    ProfileModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [CPlannerSharedModule],
  providers: [
    BasicInfoEndpointService,
    BasicInfoService,
    PresentationEndpointService,
    PresentationService
  ]

})
export class CPlannerModule { }
