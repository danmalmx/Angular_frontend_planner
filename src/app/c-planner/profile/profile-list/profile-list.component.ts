import { Component, OnInit, ViewChild, } from '@angular/core';
import { BasicInfo } from '../add-profile/basic-info/basicInfo.model';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { BasicInfoService } from '../add-profile/basic-info/basicinfo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { PresentationService } from '../add-profile/presentation/presentation.service';
import { Presentation } from '../add-profile/presentation/presentation.model';
import { filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BasicInfoComponent } from '../add-profile/basic-info/basic-info.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.sass']
})
export class ProfileListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'name', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<BasicInfo>;
  dataSource2: MatTableDataSource<Presentation>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor (
    private basicInfoService: BasicInfoService,
    private presentationService: PresentationService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router) {
    this.dataSource = new MatTableDataSource();
    // this.dataSource2 = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getProfielList();
    // this.getPresentationList();
  }

  getProfielList() {
    this.basicInfoService.gets().subscribe(res =>
       {
         this.dataSource.data = res[1]
           console.log(res);});


    // this.presentationService.gets().subscribe(res => {this.dataSource.data = res
    //   console.log(res)
    // });
  }

  // getBasicInfoList() {
  //   this.basicInfoService.gets().subscribe(res => { this.dataSource.data = res[1]});
  // }

  // getPresentationList() {
  //   this.presentationService.get().subscribe(res =>{ this.dataSource.data = res.basicinfo});
  // }

  redirect() {
    this.router.navigate(['/Profile'])
  }

  onEdit(element) {

    //this.getProfielList();
    // this.getPresentationList();
    const dialogConfig = new MatDialogConfig();
    this.presentationService.gets().subscribe(res => {
      console.log(res)
    this.dialog.open(EditProfileComponent,
      { data: res});      

    });
    dialogConfig.autoFocus = true;
    // this.dialog.open(EditProfileComponent,
    //   { data: element});
  }

  onDelete(element) {
    console.log(element);
    if (confirm('Are you sure you want to delete?')) {
      this.basicInfoService.delete(element).subscribe(res => {
        this.toastr.warning('Basic info deleted', '');
        // window.location.reload(true);
      });
    }
  }
}