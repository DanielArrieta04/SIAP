import { TestBed } from '@angular/core/testing';

import { GestionProductoService } from './gestion-producto.service';

describe('GestionProductoService', () => {
  let service: GestionProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
