import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, from, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './operators.html',
  styleUrl: './operators.css',
})
export class Operators {

  http = inject(HttpClient);

  // numbers$ = from([1,2,3,4,5,6,67,8,9,10]);
  // Rolllist$ = of([1,2,3,4,5,6,67,8,9,10]);

  timeInterval = interval(1000)

  searchControl = new FormControl()
  values: any


  constructor() {

    //Time Interval

    // this.timeInterval.subscribe((res:number)=>{
    //   console.log(res);
    // })

    //Using Filter

    // this.timeInterval.pipe(
    //   filter(num => num % 2 == 0)
    // ).subscribe((res:number)=>{
    //   console.log(res);
    // })


    //take operator means define a values for stop the exexutions 

    // this.timeInterval.pipe(
    //   take(5)
    // ).subscribe((res: any) => {
    //   console.log(res);

    // })

    // Using From operator to get the data and then using filter operator to filter the data and then subscribe to get the data

    //  this.numbers$.pipe(filter(num=> num % 2 ===0)).subscribe((data:any)=>{
    //   console.log('Number' , data);
    //  })



    //Using of operator to get the data and then using map operator to filter the data and then subscribe to get the data

    // this.Rolllist$.pipe(map (result => result.filter(num => num % 2 ===0))).subscribe((res=>{
    //   console.log('Roll Number' , res);

    // }))

    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe()



    //Search Value

    // this.searchControl.valueChanges.subscribe((res:any)=>{
    //   console.log(res);
    //   this.values= res
    // })


    //Using Filter when value is greater than 3 and more
    // this.searchControl.valueChanges.pipe(
    //   filter(serchValue=> serchValue.length >=3)
    // ).subscribe((res:any)=>{
    //   console.log(res);
    // })




  }


}
