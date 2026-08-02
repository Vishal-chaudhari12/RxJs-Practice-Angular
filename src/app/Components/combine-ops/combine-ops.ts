import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, mergeMap, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-ops',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-ops.html',
  styleUrl: './combine-ops.css',
})
export class CombineOps {

  http = inject(HttpClient)

  //-------------FORK JOINT-----------

  // cityList$ = of(["Jalgaon" ,"Pune","Nashik","Mumbail"]);
  // stateList$ = of(['MH','MP','GOA']);

  // userdata$ = this.http.get('https://dummyjson.com/users');
  // singledata = this.http.get('https://dummyjson.com/usersq/1');

  //---------SWITCH MAP-----------------------

  searchControl: FormControl = new FormControl();
  searchControlMerge: FormControl = new FormControl();
  searchControlConcat: FormControl = new FormControl();

  loginClick$ = new Subject<void>();

  constructor() {

    //-------------FORK JOINT-----------
    // this.cityList$.subscribe((res:any)=>{

    // })

    // forkJoin([this.cityList$, this.stateList$]).subscribe((res)=>{
    //    debugger
    // })

    // forkJoin([this.singledata, this.userdata$]).subscribe((res)=>{
    //   debugger
    // },error =>{
    //   debugger
    // })


    //------------------ Switch Map Example----------------

    // this.searchControl.valueChanges.subscribe((search:string)=>{
    //   this.http.get(`https://dummyjson.com/users/search?q=${search}`).subscribe((res)=>{

    //   })
    // })

    this.searchControl.valueChanges.pipe(
      switchMap((search: string) => this.http.get(`https://dummyjson.com/users/search?q=${search}`))
    ).subscribe((res) => {

    })



    //-----------Merge Map Example----------------

    this.searchControlMerge.valueChanges.pipe(
      mergeMap((search: string) => this.http.get(`https://dummyjson.com/users/search?q=${search}`))
    ).subscribe((res) => {

    })

    //-----------Concat Map Example----------------

    this.searchControlConcat.valueChanges.pipe(
      concatMap((search: string) => this.http.get(`https://dummyjson.com/users/search?q=${search}`))
    ).subscribe((res) => {

    })


    //-----------Example of ExhaustMap----------------
    this.loginClick$.pipe(
      exhaustMap(() => {
        return this.http.get(`https://dummyjson.com/users`)
      })
    ).subscribe((res) => {
      console.log(res)
    }
    )


    
  }


  onLogin() {
    this.loginClick$.next();

  }

}
