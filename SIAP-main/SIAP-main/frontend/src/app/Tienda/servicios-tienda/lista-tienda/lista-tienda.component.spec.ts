import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiendaComponent } from './lista-tienda.component';

describe('ListaTareasComponent', () => {
  let component: ListaTiendaComponent;
  let fixture: ComponentFixture<ListaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
