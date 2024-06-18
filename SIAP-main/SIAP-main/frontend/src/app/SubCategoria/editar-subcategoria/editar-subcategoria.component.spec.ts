import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubCategoriaComponent } from './editar-subcategoria.component';

describe('EditarSubcategoriaComponent', () => {
  let component: EditarSubCategoriaComponent;
  let fixture: ComponentFixture<EditarSubCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSubCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
