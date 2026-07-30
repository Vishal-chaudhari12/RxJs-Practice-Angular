import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-beh-share-replay',
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-beh-share-replay.html',
  styleUrl: './sub-beh-share-replay.css',
})
export class SubBehShareReplay implements OnInit {

  studentname = ''
  userId = 1
  userData = ''
  // studentName$ = new Subject();
  // rollNo$ = new Subject<number>();
  // takeTill = new Subject<void>();   // dont want to emmit the value then we will used this
  // courceName : Subject<string> = new Subject();  //we can assign a proper data type also


  userSrv = inject(User);

  constructor() {

    // setTimeout(() => {
    //    this.studentName$.next('Hello Vishal');
    //   this.rollNo$.next(1234567);
    //   this.takeTill.next();
    // }, 3000);


    this.userSrv.roleBehavariour$.subscribe((res: string) => {
      ;
      console.log(res)

    })

    this.userSrv.roleSub$.subscribe((res: string) => {
      ;
    })

  }


  ngOnInit(): void {
    // this.studentName$.subscribe((res:any)=>{
    //    
    //   this.studentname = res;
    // })

    // this.rollNo$.subscribe((res)=>{

    // })

    this.getUserData();
  }


  getUserData() {

    this.userSrv.getUserbyId(this.userId).subscribe((res: any) => {
      //  console.log(res)
      debugger
      this.userData = res
    })
  }


}
