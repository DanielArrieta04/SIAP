import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoDocumentoComponent } from './editar-tipodocumento.component';

describe('EditarTipodocumentoComponent', () => {
  let component: EditarTipoDocumentoComponent;
  let fixture: ComponentFixture<EditarTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
