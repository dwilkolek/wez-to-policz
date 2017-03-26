import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaneWstepneComponent } from './dane-wstepne.component';

describe('DaneWstepneComponent', () => {
  let component: DaneWstepneComponent;
  let fixture: ComponentFixture<DaneWstepneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaneWstepneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaneWstepneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
