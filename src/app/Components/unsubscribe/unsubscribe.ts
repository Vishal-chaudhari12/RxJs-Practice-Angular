import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe implements OnInit , OnDestroy {

  http = inject(HttpClient);

  //First Way to unsubscribe from observable
  subscription!: Subscription

  //Second Way to unsubscribe from observable multiples APIs
  subscriptionList: Subscription[] = [];

  ngOnInit(): void {
    this.getUsers();
    this.getPosts();
  }

  // getUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
  //     console.log(data);
  //   })
  // }


  //First Way to unsubscribe from observable
  // getUsers() {
  //   this.subscription = this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
  //     console.log(data);
  //   })
  // }


  //2nd Way to unsubscribe from observable multiples APIs

  getPosts() {
    this.subscriptionList.push(this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
    }))
  }

  // getUsers(){
  //   this.subscriptionList.push(this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
  //     console.log(res);
  //   }))
  // }

  getUsers(){
    const sub =this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log(res);
    })

    this.subscriptionList.push(sub);
  }


  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    this.subscriptionList.forEach((subscription) => subscription.unsubscribe());
  }

}
