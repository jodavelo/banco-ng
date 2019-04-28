import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioEditComponent } from './tipo-usuario-edit.component';

describe('TipoUsuarioEditComponent', () => {
  let component: TipoUsuarioEditComponent;
  let fixture: ComponentFixture<TipoUsuarioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
