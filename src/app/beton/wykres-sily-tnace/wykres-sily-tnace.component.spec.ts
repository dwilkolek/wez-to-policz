import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WykresSilyTnaceComponent } from './wykres-sily-tnace.component';

describe('WykresSilyTnaceComponent', () => {
  let component: WykresSilyTnaceComponent;
  let fixture: ComponentFixture<WykresSilyTnaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WykresSilyTnaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WykresSilyTnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
