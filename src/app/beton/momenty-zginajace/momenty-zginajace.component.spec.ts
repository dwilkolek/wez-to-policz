import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentyZginajaceComponent } from './momenty-zginajace.component';

describe('MomentyZginajaceComponent', () => {
  let component: MomentyZginajaceComponent;
  let fixture: ComponentFixture<MomentyZginajaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentyZginajaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentyZginajaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
