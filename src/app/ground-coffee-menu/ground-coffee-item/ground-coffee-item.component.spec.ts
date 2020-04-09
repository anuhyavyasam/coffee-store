import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundCoffeeItemComponent } from './ground-coffee-item.component';

describe('GroundCoffeeItemComponent', () => {
  let component: GroundCoffeeItemComponent;
  let fixture: ComponentFixture<GroundCoffeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundCoffeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundCoffeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
