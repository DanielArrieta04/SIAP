import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGestionProductoComponent } from './lista-gestionproducto.component';

describe('ListaGestionproductoComponent', () => {
  let component: ListaGestionProductoComponent;
  let fixture: ComponentFixture<ListaGestionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGestionProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGestionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
