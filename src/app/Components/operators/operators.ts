import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.html',
  styleUrl: './operators.css',
})
export class Operators {

  http = inject(HttpClient);

  // numbers$ = from([1,2,3,4,5,6,67,8,9,10]);
  // Rolllist$ = of([1,2,3,4,5,6,67,8,9,10]);


  constructor() { 


    // Using From operator to get the data and then using filter operator to filter the data and then subscribe to get the data

    //  this.numbers$.pipe(filter(num=> num % 2 ===0)).subscribe((data:any)=>{
    //   console.log('Number' , data);
    //  })



    //Using of operator to get the data and then using map operator to filter the data and then subscribe to get the data

    // this.Rolllist$.pipe(map (result => result.filter(num => num % 2 ===0))).subscribe((res=>{
    //   console.log('Roll Number' , res);

    // }))

    this.http.get('https://jsonplaceholder.typicode.com/users').pipe( )


   }

  

}
