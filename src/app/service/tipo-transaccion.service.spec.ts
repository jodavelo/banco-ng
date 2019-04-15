import { TestBed } from '@angular/core/testing';

import { TipoTransaccionService } from './tipo-transaccion.service';

describe('TipoTransaccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoTransaccionService = TestBed.get(TipoTransaccionService);
    expect(service).toBeTruthy();
  });
});
