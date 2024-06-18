import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenDeSalidaComponent } from './editar-ordendesalida.component';

describe('EditarTareaComponent', () => {
  let component: EditarOrdenDeSalidaComponent;
  let fixture: ComponentFixture<EditarOrdenDeSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrdenDeSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrdenDeSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
