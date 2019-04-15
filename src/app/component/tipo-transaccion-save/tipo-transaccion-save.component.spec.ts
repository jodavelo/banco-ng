import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransaccionSaveComponent } from './tipo-transaccion-save.component';

describe('TipoTransaccionSaveComponent', () => {
  let component: TipoTransaccionSaveComponent;
  let fixture: ComponentFixture<TipoTransaccionSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransaccionSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransaccionSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
