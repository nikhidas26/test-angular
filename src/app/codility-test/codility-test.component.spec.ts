import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodilityTestComponent } from './codility-test.component';

describe('CodilityTestComponent', () => {
  let component: CodilityTestComponent;
  let fixture: ComponentFixture<CodilityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodilityTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodilityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
