import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectiveIcoComponent } from './prospective-ico.component';

describe('ProspectiveIcoComponent', () => {
  let component: ProspectiveIcoComponent;
  let fixture: ComponentFixture<ProspectiveIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectiveIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectiveIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
