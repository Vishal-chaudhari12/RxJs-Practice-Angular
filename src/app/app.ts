import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RxJs-Practice-Angular');

  userSrv = inject(User)

  onRoleChange(event:any){
     
    this.userSrv.roleBehavariour$.next(event.target.value);
    this.userSrv.roleSub$.next(event.target.value);

  }
}
