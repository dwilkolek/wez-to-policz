import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbrojenieComponent } from './zbrojenie.component';

describe('ZbrojenieComponent', () => {
  let component: ZbrojenieComponent;
  let fixture: ComponentFixture<ZbrojenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbrojenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbrojenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
