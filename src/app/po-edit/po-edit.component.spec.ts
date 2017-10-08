import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POEditComponent } from './po-edit.component';

describe('POEditComponent', () => {
  let component: POEditComponent;
  let fixture: ComponentFixture<POEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
