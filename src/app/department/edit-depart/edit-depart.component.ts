import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {DepartmentService} from '../../service/department.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-depart',
  templateUrl: './edit-depart.component.html',
  styleUrls: ['./edit-depart.component.scss']
})
export class EditDepartComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<EditDepartComponent>,
              private service: DepartmentService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogBox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    this.service.updateDepartment(form.value).subscribe(res => {
      this.snackBar.open( 'Update Successful !', '', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }), this.snackBar.open( 'Update Fail !', '', {
      duration: 4000, verticalPosition: 'top'});
  }
}
