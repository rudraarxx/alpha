import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alpha';
  public toggleOn: boolean=true;
  public toggleOff: boolean=true;

  // headers=["Name","Age","Designation","Phone"]
  empData= [
    {
      name:'Aman R. Vishwakarma',
      age:27,
      designation:'Contractor',
      phone: 8087455490
    },
    {
      name:'Manoj kori',
      age:27,
      designation:'Contractor',
      phone: 8087568466
    },
    {
      name:'Nayan Dhoke',
      age:27,
      designation:'Supervisor',
      phone: 8087568466
    },
    {
      name:'Rahul Sahu',
      age:27,
      designation:'Supervisor',
      phone: 8087568466
    },
    {
      name:'Rupesh Sontakke',
      age:27,
      designation:'Supervisor',
      phone: 8087568466
    }
    
  ]
  
}
