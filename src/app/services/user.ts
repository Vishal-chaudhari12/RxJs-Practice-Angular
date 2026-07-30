import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {

  roleBehavariour$ = new BehaviorSubject<string>("");
  roleSub$ = new Subject<string>()
  private userDetails = new Map<number, Observable<any>>();

  constructor(private http: HttpClient,) { }



  // getUserbyId(id:number){
  //   return this.http.get('https://dummyjson.com/users/' +id)
  // }


  //Using ShareReplay for caching 
  // getUserbyId(id: number) {
  //   const userDataObs = this.http.get('https://dummyjson.com/users/' + id).pipe(
  //     shareReplay(1)
  //   );
  //   this.userDetails.set(id, userDataObs);
  // }


  getUserbyId(id: number): any | undefined {

    if (!this.userDetails.has(id)) {
      const userDataObs = this.http.get('https://dummyjson.com/users/' + id).pipe(
        shareReplay(1)
      );
      this.userDetails.set(id, userDataObs);
    }

    return this.userDetails.get(id);
  }
}
