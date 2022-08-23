import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWithNoBalanceComponent } from './students-with-no-balance.component';

describe('StudentsWithNoBalanceComponent', () => {
  let component: StudentsWithNoBalanceComponent;
  let fixture: ComponentFixture<StudentsWithNoBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsWithNoBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsWithNoBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
