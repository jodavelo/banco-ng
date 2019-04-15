import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioSaveComponent } from './tipo-usuario-save.component';

describe('TipoUsuarioSaveComponent', () => {
  let component: TipoUsuarioSaveComponent;
  let fixture: ComponentFixture<TipoUsuarioSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
