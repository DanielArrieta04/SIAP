import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaComponent } from 'src/app/Categoria/lista-categoria/lista-categoria.component';

describe('ListarSubcategoriaComponent', () => {
  let component: ListaCategoriaComponent;
  let fixture: ComponentFixture<ListaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
