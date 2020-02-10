import { Presentation } from './presentation.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PresentationService } from './presentation.service';
import { BasicInfo } from '../basic-info/basicInfo.model';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {
  @Input('presentation') presentationMove: Presentation;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private presentationService: PresentationService,
  ) {
    this.formBuilder();
   }

   hide = true;
   profileForm: FormGroup;

  ngOnInit() {
    if (this.presentationMove) {
      this.populatePresentationForm(this.presentationMove);
    }
  }

  reset() {
    if (this.profileForm.valid === true) {
      close();
    } else {
      this.profileForm.reset();
    }
  }

  formBuilder() {
    this.profileForm = this.fb.group({
      _id: new FormControl(0),
      presentation: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const addPresentationProfile = this.getNewPresentationProfile();
    if (addPresentationProfile._id === 0 || addPresentationProfile._id === null) {
      this.presentationService.post(addPresentationProfile).subscribe(
        res => {
          this.toastr.success('Presentation added');
          console.log(addPresentationProfile);
          });
    } else {
      this.presentationService.put(addPresentationProfile, addPresentationProfile._id).subscribe(
        res => {
          this.toastr.info('Presentation updated');
          this.profileForm.reset();
          // window.location.reload(true);
        });
    }
  }

  private getNewPresentationProfile(): Presentation {
    const profileFormModel = this.profileForm.value;
    return {
      _id: profileFormModel._id,
      presentation: profileFormModel.presentation
    };
  }

  populatePresentationForm(presentationInfo: Presentation) {
    this.profileForm.reset({
      _id: presentationInfo._id,
      presentation: presentationInfo.presentation
    });
  }
}