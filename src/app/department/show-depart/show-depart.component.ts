import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Department} from '../../models/department-model';
import {DepartmentService} from '../../service/department.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AddDepartComponent} from '../add-depart/add-depart.component';

@Component({
  selector: 'app-show-depart',
  templateUrl: './show-depart.component.html',
  styleUrls: ['./show-depart.component.scss']
})
export class ShowDepartComponent implements OnInit {
  listData: MatTableDataSource<any>;
  columnNames: string[] = ['Options', 'departmentId', 'departmentName'];

  constructor(private departmentService: DepartmentService, private dialog: MatDialog) { }

  @ViewChild(MatSort, null) sort: MatSort;  // Sorting

  ngOnInit() {
    this.refreshDepList();
  }

  onEdit(dep: Department) {
    console.log(dep);
  }
  refreshDepList() {
   this.departmentService.getDepartmentList().subscribe(data => {
     this.listData = new MatTableDataSource(data);
     this.listData.sort = this.sort;
   });
  }

  onDelete(departmentId: number) {
    console.log(departmentId);
  }

  appFilter(filter: string) {
    this.listData.filter = filter.trim().toLocaleLowerCase();
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(AddDepartComponent,  dialogConfig);
  }
}
