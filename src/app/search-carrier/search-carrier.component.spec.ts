import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarrierComponent } from './search-carrier.component';

describe('SearchCarrierComponent', () => {
  let component: SearchCarrierComponent;
  let fixture: ComponentFixture<SearchCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
