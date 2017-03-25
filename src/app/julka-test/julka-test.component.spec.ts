import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulkaTestComponent } from './julka-test.component';

describe('JulkaTestComponent', () => {
  let component: JulkaTestComponent;
  let fixture: ComponentFixture<JulkaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulkaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulkaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
