import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenDeSalidaComponent } from './lista-ordendesalida.component';

describe('ListaTareasComponent', () => {
  let component: ListaOrdenDeSalidaComponent;
  let fixture: ComponentFixture<ListaOrdenDeSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenDeSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdenDeSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
