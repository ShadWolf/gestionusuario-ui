import { TestBed } from '@angular/core/testing';

import { CuentasTransporteService } from './cuentas-transporte.service';

describe('CuentasTransporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuentasTransporteService = TestBed.get(CuentasTransporteService);
    expect(service).toBeTruthy();
  });
});
