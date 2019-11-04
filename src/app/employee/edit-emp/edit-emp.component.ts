import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {EmployeeService} from '../../service/employee.service';
import {NgForm} from '@angular/forms';
import {Department} from '../../models/department-model';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  departList: Array<Department> = [];
  constructor(public dialogBox: MatDialogRef<EditEmpComponent>,
              private service: EmployeeService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listDepartRefresh();
  }

  onClose() {
    this.dialogBox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    this.service.updateEmployee(form.value).subscribe(res => {
      this.snackBar.open( 'Update Successful !', '', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }), this.snackBar.open( 'Update Fail !', '', {
      duration: 4000, verticalPosition: 'top'});
  }

  listDepartRefresh() {
    this.service.getDepartDropDownValues().subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      data.forEach(element => {
        this.departList.push(element);
      });
    });
  }
}
