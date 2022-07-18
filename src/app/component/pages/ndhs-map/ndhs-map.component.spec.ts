import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdhsMapComponent } from './ndhs-map.component';

describe('NdhsMapComponent', () => {
  let component: NdhsMapComponent;
  let fixture: ComponentFixture<NdhsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdhsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdhsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
