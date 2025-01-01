import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-password-game',
  standalone: true,
  imports: [ReactiveFormsModule], // Use ReactiveFormsModule
  templateUrl: './password-game.component.html',
  styleUrls: ['./password-game.component.css']
})
export class PasswordGameComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      { validators: this.passwordMatchValidator() }
    );
  }

  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl) => {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    };
  }
}