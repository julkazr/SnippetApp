import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSnippetsComponent } from './admin-snippets.component';

describe('AdminSnippetsComponent', () => {
  let component: AdminSnippetsComponent;
  let fixture: ComponentFixture<AdminSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
