import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2SubPaginaComponent } from './ejercicio2-sub-pagina.component';

describe('Ejercicio2SubPaginaComponent', () => {
  let component: Ejercicio2SubPaginaComponent;
  let fixture: ComponentFixture<Ejercicio2SubPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2SubPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2SubPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
