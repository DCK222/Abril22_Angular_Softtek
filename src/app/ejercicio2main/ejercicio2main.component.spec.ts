import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2mainComponent } from './ejercicio2main.component';

describe('Ejercicio2mainComponent', () => {
  let component: Ejercicio2mainComponent;
  let fixture: ComponentFixture<Ejercicio2mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2mainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
