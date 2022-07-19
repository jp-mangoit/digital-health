import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhdcMapComponent } from './nhdc-map.component';

describe('NhdcMapComponent', () => {
  let component: NhdcMapComponent;
  let fixture: ComponentFixture<NhdcMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhdcMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhdcMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
