import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSaveComponent } from './usuario-save.component';

describe('UsuarioSaveComponent', () => {
  let component: UsuarioSaveComponent;
  let fixture: ComponentFixture<UsuarioSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
