import { TestBed } from '@angular/core/testing';

import { ClientesTransporteService } from './clientes-transporte.service';

describe('ClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientesTransporteService = TestBed.get(ClientesTransporteService);
    expect(service).toBeTruthy();
  });
});
