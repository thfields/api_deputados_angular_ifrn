import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeDeputadoComponent } from './exibe-deputado.component';

describe('ExibeDeputadoComponent', () => {
  let component: ExibeDeputadoComponent;
  let fixture: ComponentFixture<ExibeDeputadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeDeputadoComponent]
    });
    fixture = TestBed.createComponent(ExibeDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
