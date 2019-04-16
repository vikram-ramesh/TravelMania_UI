import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPartnerComponent } from './currency-partner.component';

describe('CurrencyPartnerComponent', () => {
  let component: CurrencyPartnerComponent;
  let fixture: ComponentFixture<CurrencyPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
