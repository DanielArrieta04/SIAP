import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDevolucionComponent } from './lista-devolucion.component';

describe('ListaDevolucionComponent', () => {
  let component: ListaDevolucionComponent;
  let fixture: ComponentFixture<ListaDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDevolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
