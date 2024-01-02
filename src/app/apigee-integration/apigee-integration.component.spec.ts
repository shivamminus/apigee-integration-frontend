import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigeeIntegrationComponent } from './apigee-integration.component';

describe('ApigeeIntegrationComponent', () => {
  let component: ApigeeIntegrationComponent;
  let fixture: ComponentFixture<ApigeeIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApigeeIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApigeeIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
