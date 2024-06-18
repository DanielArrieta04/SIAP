import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDevoluciondetalladaComponent } from './lista-devoluciondetallada.component';

describe('ListaDevoluciondetalladaComponent', () => {
  let component: ListaDevoluciondetalladaComponent;
  let fixture: ComponentFixture<ListaDevoluciondetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDevoluciondetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDevoluciondetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
