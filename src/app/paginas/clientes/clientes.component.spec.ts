/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { clientesComponent } from './clientes.component';


describe('ClientesComponent', () => {
  let component: clientesComponent;
  let fixture: ComponentFixture<clientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
