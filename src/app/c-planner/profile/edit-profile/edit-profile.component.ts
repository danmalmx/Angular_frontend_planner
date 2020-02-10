import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BasicInfo } from '../add-profile/basic-info/basicInfo.model';
import { Presentation } from '../add-profile/presentation/presentation.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BasicInfo) {
    console.log(this.data)
  }
  
  ngOnInit() {
  }

}
