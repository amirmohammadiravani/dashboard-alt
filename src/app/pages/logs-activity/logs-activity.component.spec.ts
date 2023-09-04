import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsActivityComponent } from './logs-activity.component';

describe('LogsActivityComponent', () => {
  let component: LogsActivityComponent;
  let fixture: ComponentFixture<LogsActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsActivityComponent]
    });
    fixture = TestBed.createComponent(LogsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
