import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DepartmentService} from '../../service/department.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.scss']
})
export class AddDepartComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<AddDepartComponent>, private service: DepartmentService) { }

  ngOnInit() {
    this.resetForm();
  }

  onClose() {
    this.dialogBox.close();
  }

  onSubmit(form: NgForm) {
    this.service.addDepartment(form.value).subscribe(res => {
      this.resetForm();
      alert(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = { departmentId: 0, departmentName: ''};
  }


}
