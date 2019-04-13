import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioListComponent } from './tipo-usuario-list.component';

describe('TipoUsuarioListComponent', () => {
  let component: TipoUsuarioListComponent;
  let fixture: ComponentFixture<TipoUsuarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
