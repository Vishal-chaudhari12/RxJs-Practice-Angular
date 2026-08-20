import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { combineLatest, debounceTime } from 'rxjs';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css',
})
export class RxjsReactiveForm implements OnInit {

  registerForm!: FormGroup;
  passworldMismatch: boolean = false;

  searchControl: FormControl = new FormControl('');


  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['',],
      confirmPassword: ['']
    });
  }

  ngOnInit() {

    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
    ).subscribe((search: any) => {
      console.log('Search Value Changed:', search);
    })

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

    combineLatest([
      this.registerForm.controls['password'].valueChanges,
      this.registerForm.controls['confirmPassword'].valueChanges
    ]).subscribe(([pwd, confirmpwd]) => {
      this.passworldMismatch = pwd && confirmpwd && pwd !== confirmpwd;

    })

  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert('Registration Successful!');
    }
  }



}
