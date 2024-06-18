import { TestBed } from '@angular/core/testing';

import { OrdenDeSalidaDetalladaService } from './ordendesalidadetallada.service';

describe('TareaService', () => {
  let service: OrdenDeSalidaDetalladaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenDeSalidaDetalladaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
