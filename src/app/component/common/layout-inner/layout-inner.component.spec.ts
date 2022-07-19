import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInnerComponent } from './layout-inner.component';

describe('LayoutInnerComponent', () => {
  let component: LayoutInnerComponent;
  let fixture: ComponentFixture<LayoutInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
