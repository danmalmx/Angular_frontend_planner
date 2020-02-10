import { Component, OnInit, Inject } from '@angular/core';
import { Presentation } from '../presentation.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { BasicInfo } from '../../basic-info/basicInfo.model';

@Component({
  selector: 'app-presentation-editor',
  templateUrl: './presentation-editor.component.html',
  styleUrls: ['./presentation-editor.component.sass']
})
export class PresentationEditorComponent implements OnInit {
  dataSourcePresentation: MatTableDataSource<Presentation>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formPresentationBuilder();
      this.dataSourcePresentation = new MatTableDataSource();
    }

  hide = true;
  profileForm: FormGroup;

  ngOnInit() {
    if (this.data) {
      this.populatePresentationForm(this.data);
    }
  }

  formPresentationBuilder() {
    this.profileForm = this.fb.group({
      _id: new FormControl(0),
      presentation: new FormControl(null, Validators.required)
    });
  }

  populatePresentationForm(presentationInfo: Presentation) {
    if (this.profileForm) {
    this.profileForm.reset({
    _id: presentationInfo._id,
    presentation: presentationInfo.presentation,
    });
  }
}
}
