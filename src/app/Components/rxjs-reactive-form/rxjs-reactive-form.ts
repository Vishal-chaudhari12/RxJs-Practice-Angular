import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css',
})
export class RxjsReactiveForm implements OnInit {

  registerForm!: FormGroup;
  passworldMismatch: boolean = false;


  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['',],
      confirmPassword: ['']
    });
  }

  ngOnInit() {
    this.registerForm.controls['confirmPassword'].disable();


    this.registerForm.controls['confirmPassword'].valueChanges.subscribe((value) => {
      // debugger;
    })

    this.registerForm.valueChanges.subscribe((value) => {
      // debugger;
      console.log('Form Value Changed:', value);
    }
    )

    this.registerForm.controls['password'].valueChanges.subscribe((res: any) => {
      if (res != '') {
        this.registerForm.controls['confirmPassword'].addValidators([Validators.required]);
        this.registerForm.controls['confirmPassword'].enable();
      }
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert('Registration Successful!');
    }
  }

}
