import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BasicInfo } from '../basicInfo.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BasicInfoService } from '../basicinfo.service';
import { Presentation } from '../../presentation/presentation.model';

@Component({
  selector: 'app-basic-info-editor',
  templateUrl: './basic-info-editor.component.html',
  styleUrls: ['./basic-info-editor.component.sass']
})
export class BasicInfoEditorComponent implements OnInit {
  dataSourceBasicInfo: MatTableDataSource<BasicInfo>;

  constructor(
    private basicInfoService: BasicInfoService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formBasicInfoBuilder();
      this.dataSourceBasicInfo = new MatTableDataSource();
    }

  hide = true;
  profileForm: FormGroup;
  basicInfo: BasicInfo;

  ngOnInit() {
    if (this.data.basicinfo) {
      this.populateBasicInfo(this.data);
    }
  }

  formBasicInfoBuilder() {
    this.profileForm = this.fb.group({
      _id: new FormControl(0),
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      name: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      // picture: new FormControl(null, Validators.required)
    });
  }

  populateBasicInfo(basicInfo: BasicInfo) {
    if (this.profileForm) {
      this.profileForm.reset({
      _id: basicInfo._id,
      title: basicInfo.title,
      name: basicInfo.name,
      email: basicInfo.email,
      phone: basicInfo.phone
      });
    }
  }
}
