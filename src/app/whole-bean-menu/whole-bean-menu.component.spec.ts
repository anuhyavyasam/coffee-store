import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeBeanMenuComponent } from './whole-bean-menu.component';

describe('WholeBeanMenuComponent', () => {
  let component: WholeBeanMenuComponent;
  let fixture: ComponentFixture<WholeBeanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeBeanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeBeanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
