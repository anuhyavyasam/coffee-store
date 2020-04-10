import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeBeanItemComponent } from './whole-bean-item.component';

describe('WholeBeanItemComponent', () => {
  let component: WholeBeanItemComponent;
  let fixture: ComponentFixture<WholeBeanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeBeanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeBeanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
