import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationListInitComponent } from './operation-list-init.component';

describe('OperationListInitComponent', () => {
  let component: OperationListInitComponent;
  let fixture: ComponentFixture<OperationListInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationListInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationListInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
