import { TestBed } from '@angular/core/testing';

import { OrdenDeSalidaService } from './ordendesalida.service';

describe('TareaService', () => {
  let service: OrdenDeSalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenDeSalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
