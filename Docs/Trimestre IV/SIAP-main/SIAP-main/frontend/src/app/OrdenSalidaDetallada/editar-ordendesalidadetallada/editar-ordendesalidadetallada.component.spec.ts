import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenDeSalidaDetalladaComponent } from './editar-ordendesalidadetallada.component';

describe('EditarTareaComponent', () => {
  let component: EditarOrdenDeSalidaDetalladaComponent;
  let fixture: ComponentFixture<EditarOrdenDeSalidaDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrdenDeSalidaDetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrdenDeSalidaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
