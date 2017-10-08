import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCreateComponent } from './po-create.component';

describe('POCreateComponent', () => {
  let component: POCreateComponent;
  let fixture: ComponentFixture<POCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
