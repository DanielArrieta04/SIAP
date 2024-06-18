import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDocumentoComponent } from './lista-tipodocumento.component';

describe('ListaTipodocumentoComponent', () => {
  let component: ListaTipoDocumentoComponent;
  let fixture: ComponentFixture<ListaTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
