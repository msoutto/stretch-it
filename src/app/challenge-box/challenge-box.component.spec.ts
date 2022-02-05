import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeBoxComponent } from './challenge-box.component';

describe('ChallengeBoxComponent', () => {
  let component: ChallengeBoxComponent;
  let fixture: ComponentFixture<ChallengeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
