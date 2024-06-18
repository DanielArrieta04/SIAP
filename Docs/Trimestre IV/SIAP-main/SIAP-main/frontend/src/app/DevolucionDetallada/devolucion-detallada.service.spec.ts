import { TestBed } from '@angular/core/testing';

import { DevolucionDetalladaService } from './devolucion-detallada.service';

describe('DevolucionDetalladaService', () => {
  let service: DevolucionDetalladaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolucionDetalladaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
