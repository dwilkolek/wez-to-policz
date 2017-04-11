import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WykresMomentyZginajaceComponent } from './wykres-momenty-zginajace.component';

describe('WykresMomentyZginajaceComponent', () => {
  let component: WykresMomentyZginajaceComponent;
  let fixture: ComponentFixture<WykresMomentyZginajaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WykresMomentyZginajaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WykresMomentyZginajaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
