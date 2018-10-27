import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataDetailsComponent } from './test-data-details.component';

describe('TestDataDetailsComponent', () => {
  let component: TestDataDetailsComponent;
  let fixture: ComponentFixture<TestDataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
