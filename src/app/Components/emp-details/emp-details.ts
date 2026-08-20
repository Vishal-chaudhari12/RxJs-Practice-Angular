import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobleConst } from '../../global.const';

@Component({
  selector: 'app-emp-details',
  imports: [CommonModule],
  templateUrl: './emp-details.html',
  styleUrl: './emp-details.css',
})
export class EmpDetails {

  employeeList: any[] = GlobleConst.emplist;

  employee: any = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(res => {
      const employeeId = res.get('id');
      
      this.employee = this.employeeList.find(
        emp => emp.employeeId === employeeId
      );
    });

  }

}
