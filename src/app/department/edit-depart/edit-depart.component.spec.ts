import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartComponent } from './edit-depart.component';

describe('EditDepartComponent', () => {
  let component: EditDepartComponent;
  let fixture: ComponentFixture<EditDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
