import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTiendaComponent } from './editar-tienda.component';

describe('EditarTareaComponent', () => {
  let component: EditarTiendaComponent;
  let fixture: ComponentFixture<EditarTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
