import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransaccionListComponent } from './tipo-transaccion-list.component';

describe('TipoTransaccionListComponent', () => {
  let component: TipoTransaccionListComponent;
  let fixture: ComponentFixture<TipoTransaccionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransaccionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransaccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
