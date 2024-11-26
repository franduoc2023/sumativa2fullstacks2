import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladministracionComponent } from './paneladministracion.component';

describe('PaneladministracionComponent', () => {
  let component: PaneladministracionComponent;
  let fixture: ComponentFixture<PaneladministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneladministracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneladministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
