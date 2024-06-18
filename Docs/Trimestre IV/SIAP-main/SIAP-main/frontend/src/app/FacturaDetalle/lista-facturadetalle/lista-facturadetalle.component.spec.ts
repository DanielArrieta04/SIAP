import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFacturaDetalleComponent } from './lista-facturadetalle.component';

describe('ListaFacturadetalleComponent', () => {
  let component: ListaFacturaDetalleComponent;
  let fixture: ComponentFixture<ListaFacturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFacturaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFacturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
