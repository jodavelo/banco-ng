import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaSaveComponent } from './cuenta-save.component';

describe('CuentaSaveComponent', () => {
  let component: CuentaSaveComponent;
  let fixture: ComponentFixture<CuentaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
