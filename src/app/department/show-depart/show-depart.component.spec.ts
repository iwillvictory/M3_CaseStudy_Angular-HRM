import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartComponent } from './show-depart.component';

describe('ShowDepartComponent', () => {
  let component: ShowDepartComponent;
  let fixture: ComponentFixture<ShowDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
