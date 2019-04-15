import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoSaveComponent } from './tipo-documento-save.component';

describe('TipoDocumentoSaveComponent', () => {
  let component: TipoDocumentoSaveComponent;
  let fixture: ComponentFixture<TipoDocumentoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocumentoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
