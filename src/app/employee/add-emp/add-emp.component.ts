import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../service/employee.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {element} from 'protractor';
import {Department} from '../../models/department-model';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  departList: Array<Department> = [];
  constructor(public dialogBox: MatDialogRef<AddEmpComponent>,
              private service: EmployeeService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.resetForm();
    this.listDepartRefresh();
  }

  listDepartRefresh() {
    this.service.getDepartDropDownValues().subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      data.forEach(element => {
        this.departList.push(element);
      });
    });
  }
  onClose() {
    this.dialogBox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.service.addEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.snackBar.open('Creation Successful !', '', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }), this.snackBar.open('Creation Fail !', '', {
      duration: 4000, verticalPosition: 'top'
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      employeeId: 0,
      employeeName: '',
      department: {
        departmentId: 0,
        departmentName: ''
      },
      mail: '',
      joinDate: null
    };
  }


}
