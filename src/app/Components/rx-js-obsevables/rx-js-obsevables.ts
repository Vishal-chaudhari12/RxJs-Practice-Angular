import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rx-js-obsevables',
  imports: [],
  templateUrl: './rx-js-obsevables.html',
  styleUrl: './rx-js-obsevables.css',
})
export class RxJsObsevables {

  // cityName: string[]=['Pune','Mumbai','Jalgaon','Nashik'];

  // cityList$ = of(this.cityName);
  // cityList$ = of(['Pune','Mumbai','Jalgaon','Nashik']);  // all data at once
  // cityList$ = from(['Pune','Mumbai','Jalgaon','Nashik']);   // Give me the one by one data only

  // cityName$ = new Observable<string[]>(value=>{
  //   setTimeout(()=>{
  //     value.next(this.cityName);
  //   },2000)   })


  // ----- Interval Observable -----

  myInterval$ = interval(1000);

  myTimer$ = timer(5000);

  constructor() { 


    // ------ Data used from the observable at once ------


    // this.cityList$.subscribe((data:string[])=>{
    //   debugger;
    //   console.log(data);
    // })

    //One by one Data used from the observable
    // this.cityList$.subscribe((data:string)=>{
    //   debugger;
    //   console.log(data);

    // })


    //  --- Simple Observable---

     // const myObs$ = new Observable(value=>{
    //   value.next('this is an observable');
    // })

    // myObs$.subscribe(message=>{
    //   debugger;
    //   console.log(message);
    // })

    // const newObs$ = new Observable(value=>{
    //   value.next('this is a userData observable');

    // })

    // newObs$.subscribe(data=>{
    //   debugger;
    //   console.log(data);
    // })



    // ------- Interval Observable -----

    this.myInterval$.subscribe((res:number)=>{
      console.log("Interval : ", res);
    })

    this.myTimer$.subscribe((res:number)=>{
      console.log("Timer : ", res);
    })

  }

}
