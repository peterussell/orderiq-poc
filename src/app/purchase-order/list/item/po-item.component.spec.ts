import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POItemComponent } from './po-item.component';

describe('POItemComponent', () => {
  let component: POItemComponent;
  let fixture: ComponentFixture<POItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
