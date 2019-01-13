import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIPPage } from './change-ip.page';

describe('ChangeIPPage', () => {
  let component: ChangeIPPage;
  let fixture: ComponentFixture<ChangeIPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
