import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBuyersComponent } from './token-buyers.component';

describe('TokenBuyersComponent', () => {
  let component: TokenBuyersComponent;
  let fixture: ComponentFixture<TokenBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
