import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  @Input() emp:any;

  constructor() { }

  ngOnInit(): void {
  }

}
