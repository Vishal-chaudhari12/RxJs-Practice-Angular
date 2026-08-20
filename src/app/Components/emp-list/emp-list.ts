import { Component } from '@angular/core';
import { GlobleConst } from '../../global.const';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './emp-list.html',
  styleUrl: './emp-list.css',
})
export class EmpList {

  empData : any[] = GlobleConst.emplist

}
