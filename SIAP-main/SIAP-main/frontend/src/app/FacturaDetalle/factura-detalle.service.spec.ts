import { TestBed } from '@angular/core/testing';

import { FacturaDetalleService } from './factura-detalle.service';

describe('FacturaDetalleService', () => {
  let service: FacturaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
