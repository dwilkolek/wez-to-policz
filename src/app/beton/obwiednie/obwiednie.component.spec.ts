import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObwiednieComponent } from './obwiednie.component';

describe('ObwiednieComponent', () => {
  let component: ObwiednieComponent;
  let fixture: ComponentFixture<ObwiednieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObwiednieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObwiednieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
