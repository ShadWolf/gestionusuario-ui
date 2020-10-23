import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentasComponent } from './crear-cuentas.component';

describe('CrearCuentasComponent', () => {
  let component: CrearCuentasComponent;
  let fixture: ComponentFixture<CrearCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
