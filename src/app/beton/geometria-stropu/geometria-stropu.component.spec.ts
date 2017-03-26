import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaStropuComponent } from './geometria-stropu.component';

describe('GeometriaStropuComponent', () => {
  let component: GeometriaStropuComponent;
  let fixture: ComponentFixture<GeometriaStropuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometriaStropuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriaStropuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
