import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Department} from '../../models/department-model';
import {DepartmentService} from '../../service/department.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AddDepartComponent} from '../add-depart/add-depart.component';
import { MatSnackBar} from '@angular/material';
import {EditDepartComponent} from '../edit-depart/edit-depart.component';

@Component({
  selector: 'app-show-depart',
  templateUrl: './show-depart.component.html',
  styleUrls: ['./show-depart.component.scss']
})
export class ShowDepartComponent implements OnInit {
  listData: MatTableDataSource<any>;
  columnNames: string[] = ['Options', 'departmentId', 'departmentName'];

  constructor(private departmentService: DepartmentService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.departmentService.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshDepList();
    });
  }

  @ViewChild(MatSort, null) sort: MatSort;  // Sorting

  ngOnInit() {
    this.refreshDepList();
  }

  onEdit(dep: Department) {
    this.departmentService.formData = dep;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(EditDepartComponent,  dialogConfig);
  }
  refreshDepList() {
   this.departmentService.getDepartmentList().subscribe(data => {
     this.listData = new MatTableDataSource(data);
     this.listData.sort = this.sort;
   });
  }

  onDelete(departmentId: number) {
    if (confirm('Bạn có muốn xóa không?')) {
      this.departmentService.deleteDepartment(departmentId).subscribe(res => {
        this.refreshDepList();
      });
      this.snackBar.open( 'Delete Successful !', '', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }
  }

  appFilter(filter: string) {
    this.listData.filter = filter.trim().toLocaleLowerCase();
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(AddDepartComponent,  dialogConfig);
  }
}
