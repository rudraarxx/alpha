import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  public Employees = [
    {
      'id': 'S00-1',
      'fname': 'Aman',
      'lname': 'Vishwakarma',
      'designation': 'Contractor',
      'phone':'8350506638',
      'email': 'aman.av55@gmail.com'
    },
    {
      'id': 'S00-2',
      'fname': 'Nayan',
      'lname': 'Dhoke',
      'designation': 'Supervisor',
      'phone':'8087455490',
      'email': 'nndhoke@gmail.com'
    }
  ]
  public toggleOn: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
