import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGestionProductoComponent } from './editar-gestionproducto.component';

describe('EditarGestionproductoComponent', () => {
  let component: EditarGestionProductoComponent;
  let fixture: ComponentFixture<EditarGestionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGestionProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGestionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
