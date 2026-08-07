import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-rxjs-reactive-forms',
  imports: [BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule],
  templateUrl: './rxjs-reactive-forms.html',
  styleUrl: './rxjs-reactive-forms.css',
})
export class RxjsReactiveForms {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      gender: [''],
    });
  }

 

  

  onSubmit(){ 

  }

}
