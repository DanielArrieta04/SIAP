import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenDeSalidaDetalladaComponent } from './lista-ordendesalidadetallada.component';

describe('ListaTareasComponent', () => {
  let component: ListaOrdenDeSalidaDetalladaComponent;
  let fixture: ComponentFixture<ListaOrdenDeSalidaDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenDeSalidaDetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdenDeSalidaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
