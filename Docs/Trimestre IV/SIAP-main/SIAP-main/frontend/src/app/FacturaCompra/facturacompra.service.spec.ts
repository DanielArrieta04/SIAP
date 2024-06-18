import { TestBed } from '@angular/core/testing';

import { FacturacompraService } from './facturacompra.service';

describe('TareaService', () => {
  let service: FacturacompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturacompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
