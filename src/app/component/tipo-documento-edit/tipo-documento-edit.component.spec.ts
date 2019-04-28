import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoEditComponent } from './tipo-documento-edit.component';

describe('TipoDocumentoEditComponent', () => {
  let component: TipoDocumentoEditComponent;
  let fixture: ComponentFixture<TipoDocumentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocumentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
