import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {Employee} from '../../models/employee-model';
import {EmployeeService} from '../../service/employee.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AddEmpComponent} from '../add-emp/add-emp.component';
import { MatSnackBar} from '@angular/material';
import {EditEmpComponent} from '../edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit {
  listData: MatTableDataSource<any>;
  columnNames: string[] = ['Options', 'employeeId', 'employeeName', 'department', 'mail', 'joinDate'];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.employeeService.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    });
  }

  @ViewChild(MatSort, null) sort: MatSort;  // Sorting

  ngOnInit() {
    this.refreshEmpList();
  }

  onEdit(emp: Employee) {
    console.log(emp);
    this.employeeService.formData = emp;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(EditEmpComponent,  dialogConfig);
  }
  refreshEmpList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  onDelete(employeeId: number) {
    if (confirm('Bạn có muốn xóa không?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(res => {
        this.refreshEmpList();
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
    this.dialog.open(AddEmpComponent,  dialogConfig);
  }
}
