import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveServicesComponent } from './active-services.component';

describe('ActiveServicesComponent', () => {
  let component: ActiveServicesComponent;
  let fixture: ComponentFixture<ActiveServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
