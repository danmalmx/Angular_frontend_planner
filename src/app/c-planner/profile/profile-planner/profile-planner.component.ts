import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'selenium-webdriver/firefox';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile-planner',
  templateUrl: './profile-planner.component.html',
  styleUrls: ['./profile-planner.component.sass']
})
export class ProfilePlannerComponent implements OnInit {


  constructor() { 
  }
  
  ngOnInit() {

  }
}
