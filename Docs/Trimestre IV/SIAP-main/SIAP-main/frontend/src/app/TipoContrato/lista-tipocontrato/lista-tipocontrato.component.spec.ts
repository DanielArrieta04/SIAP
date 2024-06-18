import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoContratoComponent } from './lista-tipocontrato.component';

describe('ListaTipoContratoComponent', () => {
  let component: ListaTipoContratoComponent;
  let fixture: ComponentFixture<ListaTipoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoContratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
