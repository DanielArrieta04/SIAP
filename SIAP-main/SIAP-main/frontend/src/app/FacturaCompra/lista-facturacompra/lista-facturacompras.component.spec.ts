import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFacturacomprasComponent } from './lista-facturacompras.component';

describe('ListaTareasComponent', () => {
  let component: ListaFacturacomprasComponent;
  let fixture: ComponentFixture<ListaFacturacomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFacturacomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFacturacomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
