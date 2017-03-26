import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbrojenieMinimalneComponent } from './zbrojenie-minimalne.component';

describe('ZbrojenieMinimalneComponent', () => {
  let component: ZbrojenieMinimalneComponent;
  let fixture: ComponentFixture<ZbrojenieMinimalneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbrojenieMinimalneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbrojenieMinimalneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
