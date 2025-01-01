import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGameComponent } from './password-game.component';

describe('PasswordGameComponent', () => {
  let component: PasswordGameComponent;
  let fixture: ComponentFixture<PasswordGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
