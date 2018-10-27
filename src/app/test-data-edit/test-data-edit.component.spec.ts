import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataEditComponent } from './test-data-edit.component';

describe('TestDataEditComponent', () => {
  let component: TestDataEditComponent;
  let fixture: ComponentFixture<TestDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
