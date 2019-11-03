import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { ShowDepartComponent } from './department/show-depart/show-depart.component';
import { EditDepartComponent } from './department/edit-depart/edit-depart.component';
import { AddDepartComponent } from './department/add-depart/add-depart.component';
import {DepartmentService} from './service/department.service';
import {EmployeeService} from './service/employee.service';
import {MatButtonModule, MatDialogModule, MatIconModule, MatSortModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    ShowDepartComponent,
    EditDepartComponent,
    AddDepartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,

  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [AddDepartComponent, EditDepartComponent]
})
export class AppModule { }
