import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransaccionEditComponent } from './tipo-transaccion-edit.component';

describe('TipoTransaccionEditComponent', () => {
  let component: TipoTransaccionEditComponent;
  let fixture: ComponentFixture<TipoTransaccionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransaccionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransaccionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
