import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFacturaDetalleComponent } from './editar-facturadetalle.component';

describe('EditarFacturadetalleComponent', () => {
  let component: EditarFacturaDetalleComponent;
  let fixture: ComponentFixture<EditarFacturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFacturaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFacturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
