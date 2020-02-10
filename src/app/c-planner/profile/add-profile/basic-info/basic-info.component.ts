import { BasicInfo } from './basicInfo.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BasicInfoService } from './basicinfo.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.sass']
})
export class BasicInfoComponent implements OnInit {
@Input('basicInfo') basicInfoMove: BasicInfo;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private basicInfoService: BasicInfoService,
    private dialog: MatDialog
  ) {
    this.formBuilder();
   }

  hide = true;
  profileForm: FormGroup;

  ngOnInit() {
    if (this.basicInfoMove) {
    this.populateBasicInfoForm(this.basicInfoMove);
    }
  }
  reset() {
    if(this.profileForm.valid == true) {
      this.dialog.closeAll();
    } else {
      this.profileForm.reset();
    }
  }

  formBuilder() {
    this.profileForm = this.fb.group({
      _id: new FormControl(0),
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      name: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      // picture: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let addBasicInfo = this.getNewBasicInfoProfile();
    if (addBasicInfo._id == 0 || addBasicInfo._id == null) {
      this.basicInfoService.post(addBasicInfo).subscribe(
        res => {
          this.toastr.success('Basic info added');
          console.log(addBasicInfo)
            // this.profileForm.reset();
        });
      }
      else {
        this.basicInfoService.put(addBasicInfo, addBasicInfo._id).subscribe(
          res => {
            this.toastr.info('Basic info updated');
            this.profileForm.reset();
            // this.dialog.closeAll();
        });
    }
  }

  private getNewBasicInfoProfile(): BasicInfo {
    const profileFormModel = this.profileForm.value;
    return {
      _id: profileFormModel._id,
      title: profileFormModel.title,
      name: profileFormModel.name,
      email: profileFormModel.email,
      phone: profileFormModel.phone,
      // picture: profileFormModel.picture,
    };
  }

  populateBasicInfoForm(basicInfo: BasicInfo) {
      this.profileForm.reset({
      _id: basicInfo._id,
      title: basicInfo.title,
      name: basicInfo.name,
      email: basicInfo.email,
      phone: basicInfo.phone,
      // picture: basicInfo.picture
    });
  }  
}
