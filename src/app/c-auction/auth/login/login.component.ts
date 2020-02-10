import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator } from '@angular/forms';
import { User } from '../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Input() object: User;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.loginForm = this.fb.group({
      Email: '',
      Password: ''
    });
  }

  onLogin() {
    const newEditedObject = this.getNewEdited();
  }

  private getNewEdited(): User {
    const formModel = this.loginForm.value;
    return {
      FirstName: '',
      LastName: '',
      UserName: formModel.UserName,
      Email: formModel.Email,
      IsAdminRole: false,
      IsActive: true,
      Password: formModel.Password,
      AccountId: 8
    };
  }

  public resetForm(stopEditing: boolean = false) {
    if (!this.object) {
      this.object = new User();
    }

    this.loginForm.reset({
      Email: this.object.Email,
      Password: this.object.Password
    });
  }

}
