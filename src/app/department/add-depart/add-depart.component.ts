import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DepartmentService} from '../../service/department.service';
import {NgForm} from '@angular/forms';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.scss']
})
export class AddDepartComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<AddDepartComponent>,
              private service: DepartmentService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.resetForm();
  }

  onClose() {
    this.dialogBox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    this.service.addDepartment(form.value).subscribe(res => {
      this.resetForm(form);
      this.snackBar.open( 'Creation Successful !', '', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }), this.snackBar.open( 'Creation Fail !', '', {
      duration: 4000, verticalPosition: 'top'});
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = { departmentId: 0, departmentName: ''};
  }


}
