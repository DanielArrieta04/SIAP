import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDevoluciondetalladaComponent } from './editar-devoluciondetallada.component';

describe('EditarDevoluciondetalladaComponent', () => {
  let component: EditarDevoluciondetalladaComponent;
  let fixture: ComponentFixture<EditarDevoluciondetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDevoluciondetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDevoluciondetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
