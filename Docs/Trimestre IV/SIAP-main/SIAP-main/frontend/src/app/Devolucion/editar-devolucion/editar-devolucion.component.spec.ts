import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDevolucionComponent } from './editar-devolucion.component';

describe('EditarDevolucionComponent', () => {
  let component: EditarDevolucionComponent;
  let fixture: ComponentFixture<EditarDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDevolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
