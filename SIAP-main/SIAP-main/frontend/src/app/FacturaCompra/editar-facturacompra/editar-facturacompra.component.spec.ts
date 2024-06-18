import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFacturacomprasComponent } from './editar-facturacompra.component';

describe('EditarTareaComponent', () => {
  let component: EditarFacturacomprasComponent;
  let fixture: ComponentFixture<EditarFacturacomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFacturacomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFacturacomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
