import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  btnPrivate: boolean = false;
  btnCompany: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onPrivate() {
    this.btnPrivate = true;
    this.btnCompany = false;
  }

  onCompany() {
    this.btnCompany = true;
    this.btnPrivate = false;
  }
}
