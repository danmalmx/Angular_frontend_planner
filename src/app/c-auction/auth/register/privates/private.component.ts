import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/c-auction/user.model';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass']
})
export class PrivateComponent implements OnInit {
  registerPrivateForm: FormGroup;
  @Input() object: User;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.registerPrivateForm = this.fb.group({
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '', // 'mysecretpassword123', // ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
