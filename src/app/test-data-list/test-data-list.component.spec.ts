import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataListComponent } from './test-data-list.component';

describe('TestDataListComponent', () => {
  let component: TestDataListComponent;
  let fixture: ComponentFixture<TestDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
